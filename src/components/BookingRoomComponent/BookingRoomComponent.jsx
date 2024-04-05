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
import { useQueryClient, useMutation } from "react-query";

function sumAll(obj) {
  let total = 0;
  for (let key in obj) {
    total += obj[key];
  }
  return total;
}

export default function BookingRoomComponent({
  title,
  price,
  id,
  roomId,
  roomData,
  totalRoomData,
}) {
  const { people, date } = useSearchFilterStore();
  const { data, status } = useSession();
  const router = useRouter()
  
  const cartRequestBody = {
    checkIn: date.startDate,
    checkOut: date.endDate,
    peoples: sumAll(people),
  };

  const cartAddFetch = async () => {
    const { data } = await authApi.post(
      `/cart/${id}/${roomId}`,
      cartRequestBody
    );
    return data;
  };
  const queryClient = useQueryClient();
  const { mutate: mutateCartAdd } = useMutation(() => cartAddFetch(), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItems"]);
      notifyToastInfo({ message: "장바구니 추가 완료" });
    },
    onError: (error) => {
      if (error.response?.data.message === "중복되는 주문이 존재합니다") {
        notifyToastWrong({ message: "중복되는 주문이 존재합니다." });
      } else {
        notifyToastWrong({ message: "장바구니에 추가하지 못했습니다." });
        console.error("Error adding item to cart:", error);
      }
    },
  });

  const saveCart = () => {
    if (!data) {
      notifyToastWrong({ message: "로그인이 필요한 서비스입니다!" });
      return;
    }
    mutateCartAdd();
  };

  // {
  //   "checkIn":"2024-03-15",	//NonNull
  //   "checkOut":"2024-03-16",//NonNull
  //   "peoples":4//NonNull
  // }
  const currentDateTime = dayjs();

  const discountPrice =
    roomData.price - roomData.price * totalRoomData.discount;
  const discountDate = dayjs(totalRoomData.discountDate);
  const discountDateFormatted = discountDate.format("M-DD");
  const isDiscountExpired = discountDate.isBefore(currentDateTime);

  let priceContent = "";
  console.log("totalRoomData.roomCount", roomData.roomCount);
  if (roomData.roomCount < 0) {
    priceContent = <p className="font-bold pt-6">품절</p>;
  } else if (totalRoomData.discount && !isDiscountExpired) {
    priceContent = (
      <div className="text-end flex flex-col items-end">
        <div className="w-fit px-1 bg-rose-100 rounded-sm mr-1">
          <p className="text-red-600 text-xs">
            (~{discountDateFormatted} 특가)
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center ">
          <p className="text-gray-500 text-sm line-through">{`${roomData.price.toLocaleString()} 원`}</p>
          <p className="font-bold ">{`${discountPrice.toLocaleString()} 원`}</p>
        </div>
      </div>
    );
  } else if (roomData.price) {
    priceContent = (
      <p className="font-bold pt-6">{`${roomData.price.toLocaleString()} 원`}</p>
    );
  } else {
    priceContent = <p className="font-bold pt-6">객실정보 없음</p>;
  }
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
                additionalClass={"absolute text-sm -left-4 top-0 fill-gray-500"}
              />
              <div className="mb-2">
                <p className="text-sm text-gray-500 font-semibold">
                  입실 16:00
                </p>
                <p className="text-sm text-gray-500 font-semibold">
                  퇴실 11:00
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  최대{roomData.maximumPeople}인
                </p>
              </div>
            </div>
          </div>
          <div className="justify-end items-end flex flex-col gap-10">
            <div className="font-bold text-2xl">{priceContent}</div>
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
                additionalClass="w-full sm:px-12 font-bold text-sm"
                onClick={() => 
                  {router.push(`/orders?id=${id}&roomId=${roomId}`)}}
                >
                예약하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
