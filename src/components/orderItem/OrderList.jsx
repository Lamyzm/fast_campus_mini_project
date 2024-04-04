"use client";

import React, { useState, useEffect } from "react";
import OrderItem from "@/components/orderItem/OrderItem";
import { useRouter, useSearchParams } from "next/navigation";
import authApi from "@/service/axiosConfig";

import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import { useQuery } from "react-query";
import SelectedRoomPay from "../selectedRoomPay/SelectedRoomPay";
import OrderPrice from "../orderPrice/OrderPrice";
import Icons from "../icons/icons";
import { Button } from "../buttons/Button";
import { Api } from "@/service/api";
import { notifyToastWrong } from "../../service/toast";

function sumAll(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

const OrderList = () => {
  const [data, setData] = useState(null);
  const { people, date } = useSearchFilterStore();
  const [isCartFetching, setIsCartFetching] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const roomId = params.get("roomId");
  const fetchCartData = () => {
    setIsCartFetching(true);
  };

  const fetchData = async () => {
    console.log("call getCartData");
    const orderRequestBody = {
      checkIn: date.startDate,
      checkOut: date.endDate,
      peoples: sumAll(people),
    };

    const data = authApi.post(
      `/orders/${params.get("id")}/${params.get("roomId")}`,
      orderRequestBody
    );
    console.log(data);
    return data;
  };

  const fetchDataOrder = async () => {
    try {
      const response = await Api.get(`/accommodation/${params.get("id")}`);
      const roomList = response.data.roomList;
      console.log(roomId);
      console.log(roomList);
      const filteredRooms = roomList.filter(
        (room) => room.id.toString() === roomId
      );
      console.log("filteredRooms", filteredRooms);
      console.log(date.startDate);
      console.log(roomList);
      const resData = {
        accommodation: {
          ...response.data,
          checkIn: date.startDate,
          checkOut: date.endDate,
          peoples: sumAll(people),
          room: {
            roomId: filteredRooms[0].id,
            roomName: filteredRooms[0].roomName,
            price: filteredRooms[0].price,
          },
        },
      };
      setData(resData);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  useEffect(() => {
    fetchDataOrder();
  }, [params, date, people]);

  const orderQuery = useQuery({
    queryKey: ["orders"],
    queryFn: fetchData,
    enabled: isCartFetching,
    onError: (error) => {
      if (error.response?.data.message === "중복되는 주문이 존재합니다") {
        notifyToastWrong({ message: "중복되는 주문이 존재합니다." });
      } else {
        notifyToastWrong({ message: "장바구니에 추가하지 못했습니다." });
        console.error("Error adding item to cart:", error);
      }
    },
  });
  console.log(orderQuery);

  if (data === null) {
    return (
      <>
        <div>
          <Button
            size="lg"
            color="primary"
            additionalClass="w-full justify-start item-center overflow-hidden text-ellipsis"
            onClick={() => router.push("/")}>
            홈으로 가기
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full">
        <OrderItem data={data} />
      </div>
      <OrderPrice price={data?.accommodation?.room?.price} />
      <SelectedRoomPay
        price={data?.accommodation?.room?.price}
        cartQuery={orderQuery}
        fetchCartData={fetchCartData}
        isCartFetching={isCartFetching}
      />
    </>
  );
};

export default OrderList;
