"use client";
import React, { useEffect, useId, useState } from "react";
import "swiper/css/navigation";
import axios from "axios";
import SwiperSlideComponent from "./SwiperComponent";
import { Button } from "@/components/buttons/Button";

export default function AccommodationSwiper({ title, isButton }) {
  const [data, setData] = useState("");
  const [buttonState, setButtonState] = useState("전체");
  const id = useId();
  const buttons = ["전체", "모텔", "호텔리조트", "펜션풀빌라", "프리미엄블랙"];

  const fetchData = async () => {
    try {
      const result = await axios.get("/api/products");
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
      <article className="w-full flex flex-col gap-1 main-section-padding z-0">
        <h3 className="flex justify-start font-bold text-lg">{title}</h3>
        <div className="flex gap-2 flex-row mb-2">
          {isButton
            ? buttons.map((button, index) => {
                const isActive = buttonState === button;

                return (
                  <Button
                    key={`${id}${index}`}
                    size="sm"
                    type="rounded"
                    color={isActive ? "primary" : ""}
                    outline={!isActive ? "outlineSemi" : ""}
                    additionalClass="font-bold"
                    onClick={() => setButtonState(button)}>
                    {button}
                  </Button>
                );
              })
            : ""}
        </div>

        <SwiperSlideComponent content={data} />
      </article>
    </>
  );
}
