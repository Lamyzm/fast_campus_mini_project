"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Icons from "../icons/icons";
import Link from "next/link";

export default function SwiperSlideComponent({ content }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
      <div className="w-full relative">
        <Swiper {...swiperConfig} className="my-swiper  ">
          {content ? (
            content.map((item, index) => {
              return (
                <>
                  <SwiperSlide className="my-swiper-slide " key={index}>
                    <Link href="/main">
                      <div className="w-full h-full text-black  flex-col justify-center justify-items-center ">
                        <div className=" overflow-hidden">
                          <img
                            className="rounded-xl w-full h-[160px] object-cover block mb-4"
                            src={item.image}
                            alt="ran"
                          />
                        </div>
                        <div className="text-start overflow-ellipsis flex flex-col gap-y-1 justify-between flex-col w-full h-[35%]">
                          <div>
                            <p className="text-xs">{item.category}</p>
                            <h4 className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden block w-[80%] font-bold ">
                              {item.productName}
                            </h4>
                            <p className="text-stone-600">{item.area}</p>
                          </div>
                          <div>
                            <p className="font-bold">
                              {item.minPrice.toLocaleString()} 원
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                </>
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
