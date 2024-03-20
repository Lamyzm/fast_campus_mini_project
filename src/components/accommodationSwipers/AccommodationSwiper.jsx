"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import axios from "axios";
import Icons from "../icons/icons";
import SwiperSlideComponent from "./SwiperSlideComponent";

export default function AccommodationSwiper() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/products");
      console.log(result.data.content);
      setData(result.data.content);
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SwiperSlideComponent content={data} />
    </>
  );
}
