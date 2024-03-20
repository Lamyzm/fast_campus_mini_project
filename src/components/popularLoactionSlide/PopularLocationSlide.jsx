"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Icons from '../icons/icons';
import Link from 'next/link';

const PopularLocationSlide = () => {
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
            prevEl: '.prev',
            nextEl: '.next'
        },
        modules: [Navigation],
    };
    return (
        <>
            <div className="w-full relative h-[260px]">
                <Swiper {...swiperConfig} className="my-swiper h-[260px]">
                    <SwiperSlide className="my-swiper-slide h-[260px]">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_jeju.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >제주도</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_busan.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >부산</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_seoul.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >서울</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_gangwon.jpeg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >강원도</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_gyungsang.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >경상도</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_chungchung.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >충정도</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_jeonra.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >전라도</p>
                            </>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_gyunggi.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >경기도</p>
                            </>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className="my-swiper-slide ">
                        <Link href='/'>
                            <>
                                <img src={"/slideImages/slide_incheon.jpg"} className="rounded-xl w-full h-[160px] object-cover block mb-4" alt="" />
                                <p >인천</p>
                            </>
                        </Link>
                    </SwiperSlide>

                    <div style={{ zIndex: 99 }} className="absolute top-1/2 transform -translate-y-1/2 left-0 prev rounded-full bg-white p-2 cursor-pointer">
                        <Icons type="ArrowBackIcon" size="small" color="primary" />
                    </div>
                    <div style={{ zIndex: 99 }} className="absolute top-1/2 transform -translate-y-1/2 right-0 next rounded-full bg-white p-2 cursor-pointer">
                        <Icons type="ArrowForwardIcon" size="large" color="primary" />
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default PopularLocationSlide
