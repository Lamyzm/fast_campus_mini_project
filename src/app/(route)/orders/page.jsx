"use client"
import OrderList from "@/components/orderItem/OrderList";
import React, { Suspense } from "react";


export default function OrderPage () {
  return( 
  <>
  <Suspense fallback={<>Loading...</>}>
  <OrderList />
  </Suspense>

  </>
  )
};





