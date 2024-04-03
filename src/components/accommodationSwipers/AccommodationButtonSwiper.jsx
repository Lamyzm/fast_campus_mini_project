"use client";
import React, { useEffect, useId, useState } from "react";
import "swiper/css/navigation";
import { Button } from "@/components/buttons/Button";
import AccommodationSwiperComponent from "./AccommodationSwiperComponent";
import { Api } from "@/service/api";
import dayjs from "dayjs";
import useFetchAccommodationRatingData from "@/hooks/useFetchAccommodationData";

export default function AccommodationButtonSwiper({
  title,
  area = "전체",
  category = "전체",
}) {
  console.log("call category", category);
  const [buttonState, setButtonState] = useState(category);
  const { data, fetchData } = useFetchAccommodationRatingData();
  console.log("data", data);
  const id = useId();
  const buttons = ["전체", "모텔", "펜션", "게스트하우스", "콘도"];

  const buttonHandler = (buttonState) => {
    setButtonState(buttonState);
  };

  useEffect(() => {
    fetchData(buttonState, area);
  }, [buttonState]);

  return (
    <>
      <article className="w-full flex flex-col gap-1 main-section-padding z-0">
        <h3 className="flex justify-start font-bold text-lg mb-3">{title}</h3>
        <div className="flex gap-2 flex-row mb-4">
          {buttons.map((button, index) => {
            const isActive = buttonState === button;
            return (
              <Button
                key={`${id}${index}`}
                size="sm"
                type="rounded"
                color={isActive ? "primary" : ""}
                outline={!isActive ? "outlineSemi" : ""}
                additionalClass="font-bold overflow-ellipsis whitespace-nowrap overflow-hidden"
                onClick={() => buttonHandler(button)}>
                {button}
              </Button>
            );
          })}
        </div>
        <AccommodationSwiperComponent content={data} />
      </article>
    </>
  );
}
