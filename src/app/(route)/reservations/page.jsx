'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import CartList from "@/components/CartItem/CartList";

export default function PaymentResult() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("api/cart");
        setData(result.data);
      } catch (error) {
        console.error("데이터 로딩 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartList data={data} hideCheckbox={true} />
  );
}
