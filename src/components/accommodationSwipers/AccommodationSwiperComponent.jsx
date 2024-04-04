"use client";
import React, { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Icons from "../icons/icons";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import CartLoadingDetails from "../Loading/SwiperLoading";

export default function AccommodationSwiperComponent({ content }) {
  const id = useId();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [swiper, setSwiper] = useState(null);
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
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiper.params.navigation.nextEl = navigationNextRef.current;
      swiper.navigation.update();
    },
    modules: [Navigation],
  };

  const currentDateTime = dayjs();
  return (
    <>
      <div className={`w-full relative`}>
        <Swiper {...swiperConfig} className="my-swiper" ref={setSwiper}>
          {content ? (
            content.map((item, index) => {
              const discountPrice =
                item.minPrice - item.minPrice * item.discount;
              const discountDate = dayjs(item.discountDate);
              const isDiscountExpired = discountDate.isBefore(currentDateTime);

              let priceContent = "";
              if (item.discount && !isDiscountExpired) {
                priceContent = (
                  <div className="flex flex-row gap-2">
                    <p className="font-bold pt-6">{`${discountPrice.toLocaleString()} 원`}</p>
                    <p className="text-gray-500 pt-6 text-sm line-through">{`${item.minPrice.toLocaleString()} 원`}</p>
                  </div>
                );
              } else if (item.minPrice) {
                priceContent = (
                  <p className="font-bold pt-6">{`${item.minPrice.toLocaleString()} 원`}</p>
                );
              } else {
                priceContent = "";
              }

              return (
                <SwiperSlide
                  className={"my-swiper-slide"}
                  key={`${id}${index}`}>
                  <Link href={`/room/${item.id}`}>
                    <div className="w-full h-full  text-black  flex-col justify-center justify-items-center ">
                      <div
                        className=" overflow-hidden relative rounded-xl h-[150px] w-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}>
                        {/* <Image
                          src={item.image}
                          width={"300"}
                          height={"550"}
                          objectFit="cover"
                          alt="숙소 이미지"
                        /> */}
                        <div className="w-full h-full absolute top-0  hover:bg-black hover:bg-opacity-30 transition-colors "></div>
                      </div>
                      <div className="text-start overflow-ellipsis flex gap-y-1 justify-between flex-col w-full h-[35%]">
                        <div className="flex flex-col gap-1">
                          <p className="text-xs pt-4">{item.category}</p>
                          <h4 className="text-base overflow-ellipsis whitespace-nowrap overflow-hidden block w-[80%] font-bold ">
                            {item.accommodationName}
                          </h4>
                          <div className="flex flex-row gap-1  overflow-ellipsis whitespace-nowrap overflow-hidden">
                            <p
                              className={`text-black font-bold text-sm block
                                `}>
                              {item.area} ·
                            </p>
                            <p
                              className={`text-stone-600 text-sm block
                              overflow-ellipsis whitespace-nowrap overflow-hidden none
                                `}>
                              {item.address}
                            </p>
                          </div>
                          <div className="bg-amber-500 rounded-lg px-2 text-center flex flex-row w-fit gap-1 text-sm font-bold">
                            <div>★</div>
                            <div className="flex-grow">
                              {item.rating.toFixed(1)}
                            </div>
                          </div>
                        </div>
                        {priceContent}
                        {item.discount && isDiscountExpired ? " " : ""}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })
          ) : (
            <CartLoadingDetails></CartLoadingDetails>
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
