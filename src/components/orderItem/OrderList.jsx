import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";
import { useRouter, useSearchParams } from "next/navigation";
import { Api } from "@/service/api";
import authApi from "@/service/axiosConfig";
import OrderRoomPay from "../orderRoomPay/OrderRoomPay";
import OrderPrice from "../orderPrice/OrderPrice";

const OrderList = () => {
  const [data, setData] = useState(null); 
  const router = useRouter();
  const params = useSearchParams();
  console.log("params:", params.get('id'));
  console.log("params:", params.get('roomId'));



  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await Api.get(`/accommodation/${params.get('roomId')}`);
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching accommodation data:", error);
      }
    };

    fetchAccommodation();
  }, [params.get('roomId')]); // Fetch data whenever roomId changes

  console.log("Data passed to OrderItem:", data);

  return (
    <>
      <div className="w-full">
        {data && <OrderItem data={data} />}
      </div>
      {/* <OrderPrice price={} /> */}
      <OrderRoomPay price={data?.price} />
    </>
  );
};

export default OrderList;
