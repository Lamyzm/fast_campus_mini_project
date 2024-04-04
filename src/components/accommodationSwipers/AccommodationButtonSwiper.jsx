"use client";
import React, { useEffect, useId, useState } from "react";
import "swiper/css/navigation";
import { Button } from "@/components/buttons/Button";
import AccommodationSwiperComponent from "./AccommodationSwiperComponent";
import { Api } from "@/service/api";
import dayjs from "dayjs";
import useFetchAccommodationRatingData from "@/hooks/useFetchAccommodationData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function AccommodationButtonSwiper({
  title,
  area = "전체",
  category = "전체",
}) {
  const [buttonState, setButtonState] = useState(category);
  const { data, fetchData } = useFetchAccommodationRatingData();
  const id = useId();
  const buttons = ["전체", "모텔", "펜션", "게스트하우스", "콘도"];

  const buttonHandler = (buttonState) => {
    setButtonState(buttonState);
  };

  useEffect(() => {
    fetchData(buttonState, area);
  }, [buttonState]);

  const swiperConfig = {
    centeredSlides: false,
    slidesPerView: "auto",
    loop: false,
    pagination: {
      type: "fraction",
    },
  };
  return (
    <>
      <article className="w-full flex flex-col gap-1 main-section-padding z-0">
        <h3 className="flex justify-start font-bold text-lg mb-3">{title}</h3>
        <Swiper {...swiperConfig} className="button-swiper">
          <div className="flex gap-2 flex-row mb-4 sm:visible invisible ">
            {buttons.map((button, index) => {
              const isActive = buttonState === button;
              return (
                <SwiperSlide
                  key={`${id}${index}`}
                  className="button-swiper-silde">
                  <Button
                    key={`${id}${index}`}
                    size="sm"
                    type="rounded"
                    color={isActive ? "primary" : ""}
                    outline={!isActive ? "outlineSemi" : ""}
                    additionalClass="font-bold overflow-ellipsis whitespace-nowrap overflow-hidden min-w-10"
                    onClick={() => buttonHandler(button)}>
                    {button}
                  </Button>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <AccommodationSwiperComponent content={data} />
      </article>
    </>
  );
}
