
import { Api } from "@/service/api";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import OrderPrice from "../orderPrice/OrderPrice";
import { useQuery } from "react-query";
import OrderRoomPay from "../orderRoomPay/OrderRoomPay";
import authApi from "@/service/axiosConfig";

function sumAll(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

const OrderList = () => {
  const params = useSearchParams();
  const [data, setData] = useState(null);
  const { people, date } = useSearchFilterStore();
  const roomId = params.get("roomId")
  console.log(params.get("roomId"))
  console.log("peoples:", people)
  const room = data?.roomList.find(room => room.id === parseInt(roomId));
  const [isOrderFetching, setIsOrderFetching] = useState(false);
  const fetchOrderData = () => {
    setIsOrderFetching(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.get('id')) {
          const { data } = await Api.get(`/accommodation/${params.get('id')}`);
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.get('id')]);

  console.log(data);

  const orderRoom = async () => {
    const orderRequestBody = {
      checkIn: date.startDate,
      checkOut: date.endDate,
      peoples: sumAll(people),
    };
    const { data } = await authApi.post(`/orders/${params.get('id')}/${params.get('roomId')}`, orderRequestBody);
    return data;
  };
  console.log("orderdata", data)

  // 결제로직 query
  const orderQuery = useQuery({
    queryKey: ["order"],
    queryFn: orderRoom,
    enabled: isOrderFetching, 
  });
  console.log(orderQuery)


  return (
    <div className="w-full h-full flex-row p-9">
      {data && roomId && (
        <div className="min-h-[60vh] w-full flex">
          <OrderItem
            accommodation={data} // Pass the entire data object
            roomId={roomId} // Pass roomId directly 
            startDate={date.startDate}
            endDate={date.endDate}
            peoples={people}
          />
        </div>
      )}
      <OrderPrice price={room?.price} />
      <OrderRoomPay
        price={room?.price}
        fetchOrderData={fetchOrderData}
        orderQuery={orderQuery}
        isOrderFetching={isOrderFetching} 
      />
    </div>
  );
};

export default OrderList;
