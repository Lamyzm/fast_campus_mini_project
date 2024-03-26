"use client";
import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Icons from "../icons/icons";
import Link from "next/link";

export default function SwiperSlideComponent({ content }) {
  const id = useId();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  let isLocale = false;
  if (!content[0]?.productName) {
    isLocale = true;
  }
  const swiperConfig = {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 22,
    initialSlide: 1,
    loop: false,
    pagination: {
      type: "fraction",
    },
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    modules: [Navigation],
  };
  return (
    <>
      <div className={`w-full relative ${isLocale ? "h-[230px]" : ""}`}>
        <Swiper {...swiperConfig} className="my-swiper">
          {content ? (
            content.map((item, index) => {
              return (
                <SwiperSlide
                  className={
                    isLocale ? "my-swiper-slide-locale" : "my-swiper-slide"
                  }
                  key={`${id}${index}`}>
                  <Link href="/main">
                    <div className="w-full h-full  text-black  flex-col justify-center justify-items-center ">
                      <div className=" overflow-hidden relative rounded-xl">
                        <img
                          className=" w-full h-[160px] object-cover block"
                          src={item.image}
                          alt="ran"
                        />
                        <div className="w-full h-full absolute top-0  hover:bg-black hover:bg-opacity-30 transition-colors "></div>
                      </div>
                      <div className="text-start overflow-ellipsis flex gap-y-1 justify-between flex-col w-full h-[35%]">
                        <div>
                          <p className="text-xs pt-4">{item.category}</p>
                          <h4 className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden block w-[80%] font-bold ">
                            {item.productName}
                          </h4>
                          <p
                            className={`text-stone-600 pt-4 ${
                              isLocale ? "text-center" : "none"
                            }`}>
                            {item.area}
                          </p>
                        </div>
                        <div>
                          <p className="font-bold">
                            {item.minPrice
                              ? `${item.minPrice.toLocaleString()} 원`
                              : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })
          ) : (
            <div>컨텐츠 없음</div>
          )}
        </Swiper>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev_v flex justify-center justify-items-center items-center ">
          <Icons
            type="ArrowBackIosNewIcon"
            size="large"
            color="primary"
            className="cursor-pointer"
          />
        </div>
        <div
          ref={navigationNextRef}
          className="swiper-button-next_v flex justify-center justify-items-center items-center">
          <Icons
            type="ArrowForwardIosIcon"
            size="large"
            color="primary"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
