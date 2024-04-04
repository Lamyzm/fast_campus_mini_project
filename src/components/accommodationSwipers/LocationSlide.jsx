"use client";
import React, { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Icons from "../icons/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";

export default function LocationSlide({ content }) {
    const { setPopularArea } = useSearchFilterStore()

    //필요
    const id = useId();
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [swiper, setSwiper] = useState(null);
    const router = useRouter()

    //필요
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

    const handleClick = (e, item) => {
        setPopularArea(item.area)
        router.push(`/room`)
    };
    return (
        <>
            <div className={`w-full relative "h-[230px]" `}>
                <Swiper {...swiperConfig} className="my-swiper" ref={setSwiper}>
                    {content.map((item, index) => {
                        return (
                            <SwiperSlide
                                className={"my-swiper-slide-locale"}
                                style={{ height: '220px' }}
                                key={`${id}${index}`}>
                                <div
                                    onClick={(e) => handleClick(e, item)}
                                    className="cursor-pointer"
                                >
                                    <div className="w-full h-full  text-black  flex-col justify-center justify-items-center ">
                                        <div className=" overflow-hidden relative rounded-xl">
                                            <Image
                                                width={180}
                                                height={160}
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
                                                <p className="text-gray-600 pt-4 text-center font-bold">
                                                    {item.area}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}

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
