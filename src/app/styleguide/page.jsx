"use client";
import Buttons from "@/components/buttons/Buttons";
import IconsList from "@/components/icons";
import { Input } from "@/components/input";
import Calendar from "@/components/calendar/Calendar";
import NewCalendar from "@/components/calendar/Calendar2";
import { GlobalLayout } from "@/components/GlobalLayout";
import PopularLocationSlideContainer from "@/components/popularLoactionSlide/PopularLocationSlideContainer";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";

export default function styleguide() {
  return (
    <>
      <GlobalLayout>
        <AccommodationSwiper title="인기여행"></AccommodationSwiper>
        <Buttons></Buttons>
        <div className="m-10">
          <h1> 인풋 </h1>
          <Input
            id="username"
            size="default"
            width="sm"
            placeholder="Enter your username"
          />
          <Input
            id="password"
            size="default"
            type="password"
            placeholder="Enter your password"
          />
          <Input
            id="username"
            size="default"
            width="sm"
            placeholder="Enter your username"
          />
          <Input
            id="password"
            size="default"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div>
          {/* size option : small, large
          color option : primary, secondary (상황에 맞게 색상 수정) */}
          <h1> 아이콘 </h1>
          <IconsList />
        </div>
        <PopularLocationSlideContainer />
        <Calendar />
        <NewCalendar />
        <CouponSlideContainer />
      </GlobalLayout>
    </>
  );
}
