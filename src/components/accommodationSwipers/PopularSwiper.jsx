"use client";
import React from "react";
import "swiper/css/navigation";
import regionShowcase from "@/assets/json/regionShowcaseData";
import LocationSlide from "./LocationSlide";

export default function PopularSwiper({ title }) {

  return (
    <>
      <article className="w-full flex flex-col gap-1 main-section-padding z-0" style={{height:'250px'}}>
        <h3 className="flex justify-start font-bold text-lg ">{title}</h3>
        <LocationSlide content={regionShowcase?.content} />
      </article>
    </>
  );
}
