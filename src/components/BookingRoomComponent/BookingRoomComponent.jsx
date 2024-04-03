"use client";
import { Button } from "../buttons/Button";
import Icons from "../icons/icons";
import authApi from "@/service/axiosConfig";
import { useSearch } from "@/context/SearchContext";
import dayjs from "dayjs";
import { notifyToast, notifyToastInfo } from "@/service/toast";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { notifyToastWrong } from "../../service/toast";

function sumAll(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

export default function BookingRoomComponent({ title, price, id, roomId }) {
  const { people, date } = useSearchFilterStore();
  const { data, status } = useSession();
  const router = useRouter();

  const saveCart = () => {
    if (!data) {
      router.push("/login");
      return;
    }
    const cartRequestBody = {
      checkIn: date.startDate,
      checkOut: date.endDate,
      peoples: sumAll(people),
    };
    console.log(cartRequestBody);
    authApi
      .post(`/cart/${id}/${roomId}`, cartRequestBody)
      .then((response) => {
        console.log(response.data);
        notifyToastInfo({ message: "장바구니 추가 완료" });
      })
      .catch((error) => {
        notifyToastWrong({ message: "장바구니에 추가하지 못했습니다." });
        console.error("Error fetching data:", error);
      });
  };
  // {
  //   "checkIn":"2024-03-15",	//NonNull
  //   "checkOut":"2024-03-16",//NonNull
  //   "peoples":4//NonNull
  // }
  return (
    <>
      <div className="w-full bg-body-color rounded-md p-3 pt-8 mb-8 flex flex-col justify-between">
        <h3 className="text-2xl font-bold mb-10">{title}</h3>
        <div className="bg-white rounded-md flex flex-row justify-between p-7 ">
          <div className="flex-row flex">
            <div className="flex flex-col relative">
              <Icons
                type="ScheduleIcon"
                size="large"
                color="primary"
                additionalClass={
                  "absolute text-sm -left-4 top-0 fill-subtitle-gray"
                }
              />
              <p className="text-xs text-subtitle-gray font-semibold">
                입실 16:00
              </p>
              <p className="text-xs text-subtitle-gray font-semibold">
                퇴실 11:00
              </p>
            </div>
          </div>
          <div className="justify-end items-end flex flex-col gap-10">
            <div className="font-bold text-2xl">
              {price.toLocaleString()} 원
            </div>
            <div className="flex flex-row w-fit gap-4">
              <Button
                size="lg"
                color="white"
                outline="outlineSemi"
                additionalClass="px-2"
                onClick={() => {
                  saveCart();
                }}>
                <Icons
                  type="ShoppingCartOutlinedIcon"
                  size="large"
                  color="primary"
                />
              </Button>

              <Button
                size="lg"
                color="primary"
                additionalClass="w-full sm:px-12 font-bold text-sm">
                예약하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
