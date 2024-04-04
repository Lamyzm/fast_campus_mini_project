"use client";
import React, { useEffect, useId, useState } from "react";
import "swiper/css/navigation";
import axios from "axios";
import SwiperSlideComponent from "./SwiperComponent";
import { Button } from "@/components/buttons/Button";
import AccommodationSwiperComponent from "./AccommodationSwiperComponent";
import { Api } from "@/service/api";
import dayjs from "dayjs";
import useFetchAccommodationRatingData from "@/hooks/useFetchAccommodationData";

export default function AccommodationSwiper({
  title,
  area = "전체",
  category,
  sort,
}) {
  const { data, fetchData } = useFetchAccommodationRatingData();
  useEffect(() => {
    fetchData(category, area, sort);
  }, []);

  return (
    <>
      <article className="w-full flex flex-col gap-1 main-section-padding z-0">
        <h3 className="flex justify-start font-bold text-lg mb-3">{title}</h3>
        <AccommodationSwiperComponent content={data} />
      </article>
    </>
  );
}
