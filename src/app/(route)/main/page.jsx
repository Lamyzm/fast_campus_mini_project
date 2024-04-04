/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import PopularSwiper from "@/components/accommodationSwipers/PopularSwiper";
import Divider from "@/components/Divider";
import { useEffect, useState } from "react";
import { useIsSearchedStore } from "@/store/useIsSearchStore";
import Image from "next/image";
import { useSubFilterStore } from "@/store/useSubFilterStore";
import AccommodationButtonSwiper from "@/components/accommodationSwipers/AccommodationButtonSwiper";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const { clearIsSearched } = useIsSearchedStore(); //현재 페이지가 메인페이지인지, 검색결과 페이지인지
  const { clear } = useSubFilterStore();
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    clearIsSearched(); //메인페이지 로드 시 IsSearched false
    clear();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        // 예시로 1200px 스크롤됐을 때 버튼을 보이게 설정
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="pt-12 w-[100vw] h-[450px] relative ">
        <Image
          src="/mainsearchbar.png"
          loading="lazy"
          layout="fill"
          objectFit="fill"
          sizes="100vw"
          quality={100}
          style={{ width: "100%", height: "100%" }}
        />
        <div
          className={"absolute top-[40%] left-[25%] w-[1000px] px-5 "}
          style={{ left: "calc(50% - 500px)", top: "calc(50% - 50px)" }}>
          <MainSearchBox />
        </div>
        <div
          className="absolute text-white text-4xl font-bold  w-[1000px]"
          style={{ left: "calc(52% - 500px)", top: "calc(20% - 40px)" }}>
          여행 할 땐?
        </div>
        <div
          className="absolute text-white text-4xl font-bold  w-[1000px]"
          style={{ left: "calc(52% - 500px)", top: "calc(30% - 40px)" }}>
          팀쓰리!
        </div>
      </div>
      <Divider />
      <PopularSwiper title="국내 인기 여행지" />
      <Divider />
      <CouponSlideContainer />
      <Divider />
      <AccommodationButtonSwiper title="인기 추천 숙소" />
      <Divider />
      <AccommodationSwiper
        title="제주 인기 호텔, 이번 주 HOT 픽!"
        area="제주"
        category="호텔"
      />
      <Divider />
      <AccommodationSwiper
        title="펜션 최저가"
        category="펜션"
        sort="minPrice"
      />
      <ScrollToTopButton show={showScrollButton} />
    </>
  );
}
