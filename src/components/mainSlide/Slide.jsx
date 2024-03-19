"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import Icons from '../icons/icons';
import Link from 'next/link';

const Slide = () => {
    return (
        <>
            <Swiper
                slidesPerView={5}
                freeMode={true}
                spaceBetween={20}
                modules={[Navigation, FreeMode]}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next'
                }}
                className="mySwiper"
                style={{ maxWidth: '900px' }}
            >
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_jeju.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>제주도</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_busan.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>부산</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_chungchung.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>충정도</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_gangwon.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>강원도</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_incheon.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>인천</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_jeonra.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>전라도</p>
                        </>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href='/'>
                        <>
                            <img src={"/slideImages/slide_seoul.jpeg"} style={{ borderRadius: '10px' }} alt="" />
                            <p style={{ padding: '5px 0' }}>서울</p>
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

        </>
    )
}

export default Slide
