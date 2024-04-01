/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import PopularSwiper from "@/components/accommodationSwipers/PopularSwiper";
import Divider from "@/components/Divider";
import MainNav from "@/components/mainNav/MainNav";
import { useEffect } from "react";
import { useIsSearchedStore } from "@/store/useIsSearchStore";
import Image from "next/image";

export default function Home() {
  const { clearIsSearched } = useIsSearchedStore() //현재 페이지가 메인페이지인지, 검색결과 페이지인지


  useEffect(() => {
    clearIsSearched() //메인페이지 로드 시 IsSearched false
  }, [])

  return (
    <>
      <MainNav />
      <div className="w-full h-[450px] relative">
        <Image
          src='/mainsearchbar.png'
          loading="lazy"
          layout="fill"
          objectFit="fill"
          sizes='100vw'
          quality={100}
        />
        <div className="w-full h-full absolute top-0  bg-black bg-opacity-10 "></div>
        <div className={"absolute top-[40%]  w-full px-5"}>
          <MainSearchBox />
        </div>
      </div>
      <Divider />
      <PopularSwiper title="국내 인기 여행지" />
      <Divider />

      <CouponSlideContainer />
      <Divider />

      <AccommodationSwiper title="강릉 풀펜션" isButton={true} />
      <Divider />
      <AccommodationSwiper title="인기여행" />
    </>
  );
}
