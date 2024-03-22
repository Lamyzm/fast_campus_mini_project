"use client";
import Buttons from "@/components/buttons/Buttons";
import IconsList from "@/components/icons";
import { Input } from "@/components/input";
import Calendar from "@/components/calendar/Calendar";
import { GlobalLayout } from "@/components/GlobalLayout";
import OldCalendar from "@/components/calendar/OldCalendar";
import PopularLocationSlideContainer from "@/components/popularLoactionSlide/PopularLocationSlideContainer";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import SelectPeople from "@/components/SelectPeople/SelectPeople";
import LocationCategory from "@/components/locationCategory/LocationCategory";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import SearchButtons from "@/components/searchButtons/searchButtons";
import AccommodationList from "@/components/accommodationList/AccommodationList";

export default function styleguide() {
  return (
    <>
      <GlobalLayout>
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
        <div className="h-12 w-full">--</div>
        <AccommodationSwiper title="인기여행"></AccommodationSwiper>
        <AccommodationSwiper
          title="강릉 풀펜션"
          isButton={true}></AccommodationSwiper>
        <Calendar />
        <OldCalendar />
        <CouponSlideContainer />
        <LocationCategory />
        <SearchButtons />
        <SelectPeople />
        <AccommodationList />
      </GlobalLayout>
      <MainSearchBox destination="서울" headCount={3} />
      <MainSearchBox />
    </>
  );
}
