"use client";
import Buttons from "@/components/buttons/Buttons";
import IconsList from "@/components/icons";
import { Input } from "@/components/input";
import Calendar from "@/components/calendar/Calendar";
import { GlobalLayout } from "@/components/GlobalLayout";
import PopularLocationSlideContainer from "@/components/popularLoactionSlide/PopularLocationSlideContainer";
import CouponSlideContainer from "@/components/couponSlide/CouponSlideContainer";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import SelectPeople from "@/components/SelectPeople/SelectPeople";
import LocationCategory from "@/components/locationCategory/LocationCategory";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import MainNav from "@/components/mainNav/MainNav";
import RoomCategory from "@/components/roomCategory/RoomCategory";
import axios from "axios";
import SelectedRoomDetailLayout from "@/components/SelectedRoomDetailLayout";
import BookingRoomComponent from "@/components/BookingRoomComponent/BookingRoomComponent";
import AccommodationList from "@/components/accommodationList/AccommodationList";
import RoomOutline from "@/components/roomOutline/RoomOutline";
import SelectedRoomMain from "@/components/selectedRoomMain/SelectedRoomMain";
import SelectedRoomPay from "@/components/selectedRoomPay/SelectedRoomPay";
import SelectNav from "@/components/selectNav/SelectNav";
import DetailNav from "@/components/detailNav/DetailNav";
import ShoppingCartNav from "@/components/shoppingCartNav/ShoppingCartNav";
import PayCompleteNav from "@/components/payCompleteNav/PayCompleteNav";
import CartPrice from "@/components/cartPrice/CartPrice";
import AccommodationList2 from "@/components/accommodationList/AccommodationList2";
import SearchButtons from "@/components/searchButtons/searchButtons";
import CartItem from "@/components/CartItem/CartItem";
import CartIndex from "@/components/CartItem/CartList";
import PopularSwiper from "@/components/accommodationSwipers/PopularSwiper";
import ZustandSelectPeople from "@/components/SelectPeople/ZustandSelectPeople";

export default function styleguide() {
  const init = async () => {
    const result = await axios.get("/api");
    return result.data;
  };

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
        <PopularSwiper title="국내 인기 여행지"></PopularSwiper>
        <div className="h-12 w-full">--</div>
        <AccommodationSwiper title="인기여행"></AccommodationSwiper>
        <AccommodationSwiper
          title="강릉 풀펜션"
          isButton={true}></AccommodationSwiper>
        <Calendar />
        <CouponSlideContainer />
        <LocationCategory />
        <SelectPeople />
        <MainNav />
        <RoomCategory />
        <SelectedRoomDetailLayout>
          <SelectedRoomMain />
          <RoomOutline />
          {/* <BookingRoomComponent
            title="[룸UP& 감자빵세트] 슈페리 골저스파셜오션트윈"
            price={1000450}
          /> */}
        </SelectedRoomDetailLayout>
        <AccommodationList />
        <SelectedRoomPay />
        <CartPrice />
        <SelectNav />
        <DetailNav />
        <ShoppingCartNav />
        <PayCompleteNav />
        <AccommodationList2 />
        <SearchButtons />
        <CartItem></CartItem>
        <CartIndex></CartIndex>
        <ZustandSelectPeople/>
      </GlobalLayout>
      <MainSearchBox destination="서울" headCount={3} />
      <MainSearchBox />
    </>
  );
}
