// 'use client'

// import React, { useState, useEffect } from "react";
// import OrderItem from "@/components/orderItem/OrderItem";
// import { useRouter, useSearchParams } from "next/navigation";
// import authApi from "@/service/axiosConfig";

// import { useSearchFilterStore } from "@/store/useSearchFilterStore";
// import { useQuery } from "react-query";
// import SelectedRoomPay from "../selectedRoomPay/SelectedRoomPay";
// import OrderPrice from "../orderPrice/OrderPrice";
// import Icons from "../icons/icons";
// import { Button } from "../buttons/Button";

// function sumAll(obj) {
//   let total = 0;
//   for (let key in obj) {
//     total += obj[key];
//   }
//   return total;
// }

// const OrderList = () => {
//   const [data, setData] = useState(null);
//   const { people, date } = useSearchFilterStore();
//   const [isCartFetching, setIsCartFetching] = useState(false);
//   const params = useSearchParams();
//   const router = useRouter();

//   const fetchData = async () => {
//     try {
//       setIsCartFetching(true);
//       const orderRequestBody = {
//         checkIn: date.startDate,
//         checkOut: date.endDate,
//         peoples: sumAll(people),
//       };
//       const response = await authApi.post(`/orders/${params.get('id')}/${params.get('roomId')}`, orderRequestBody);
//       console.log("Response:", response.status);
//       console.log("Order created successfully:", response.data);
//       const data = response.data;
//       setData(data);
//     } catch (error) {
//       console.error("Error creating order:", error);
//       // You might want to set an error state here if needed
//     } finally {
//       setIsCartFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [params, date, people]);

//   const orderQuery = useQuery({
//     queryKey: ["orders"],
//     queryFn: fetchData,
//     enabled: isCartFetching
//   });
//   console.log(orderQuery)
//   if (data === null) {
//     return (
//       <>
//         <div>
//           <Button
//             size="lg"
//             color="primary"
//             additionalClass="w-full justify-start item-center overflow-hidden text-ellipsis"
//             onClick={() => router.push("/")}>
//             홈으로 가기
//           </Button>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <div className="w-full">
//         <OrderItem data={data} />
//       </div>
//       <OrderPrice price={data?.accommodation.room.price} />
//       <SelectedRoomPay
//         fetchCartData={() => setIsCartFetching(true)}
//         price={data?.accommodation.room.price}
//         cartQuery={orderQuery}
//         isCartFetching={isCartFetching}
//       />
//     </>
//   );
// };

// export default OrderList;

