"use client";
import axios from "axios";
import { Button } from "@/components/buttons/Button";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import MainNav from "@/components/mainNav/MainNav";
import Calendar from "@/components/calendar/Calendar";
import PopularLocationSlideContainer from "@/components/popularLoactionSlide/PopularLocationSlideContainer";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import PopularSwiper from "@/components/accommodationSwipers/PopularSwiper";
import { faker } from "@faker-js/faker";
import { GlobalLayout } from "../../../components/GlobalLayout";
import Divider from "@/components/Divider";
import { useSession } from "next-auth/react";

export default function Home() {
  const postData = async () => {
    try {
      const response = await axios.get(
        `http://3.35.216.158:8080/api/accommodation`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      <MainNav />
      <div className="w-full h-[450px] relative mb-14">
        <img
          src={faker.image.urlPicsumPhotos()}
          alt=""
          className="w-full h-full"
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

      <AccommodationSwiper
        title="강릉 풀펜션"
        isButton={true} />
      <Divider />
      <AccommodationSwiper title="인기여행" />
    </>
  );
}
