"use client";
import React, { useEffect, useId, useState } from "react";
import "swiper/css/navigation";
import axios from "axios";
import SwiperSlideComponent from "./SwiperComponent";
import { Button } from "@/components/buttons/Button";
import regionShowcase from "@/assets/json/regionShowcaseData";

export default function PopularSwiper({ title }) {
  const [data, setData] = useState("");
  useEffect(() => {
    setData(regionShowcase.content);
  }, []);

  return (
    <>
      <article className="w-full flex flex-col gap-1 main-section-padding z-0">
        <h3 className="flex justify-start font-bold text-lg ">{title}</h3>
        <SwiperSlideComponent content={data} />
      </article>
    </>
  );
}
