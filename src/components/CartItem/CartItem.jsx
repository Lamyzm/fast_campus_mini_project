"use client";
import React from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import CartCheckBox from "./CartCheckBox";
import Icons from "@/components/icons/icons";
import { useMutation, useQueryClient } from "react-query";
import authApi from "@/service/axiosConfig";

dayjs.extend(utc);
dayjs.locale("ko");
const FORMATTER = "MM.DD (ddd)";

export default function CartItem({
  data,
  index,
  checkedItems,
  setCheckedItems,
  setISCheckAllItems,
  setIsCheckPass,
  isCheckPass,
  hideCheckbox, 
  hideCloseButton
}) {
  const deleteFunc = async (id) => {
    const { data } = await authApi.delete(`/cart/${id}`);
    return data;
  };

  const queryClient = useQueryClient();
  const { mutate: dataDelete } = useMutation((id) => deleteFunc(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cartItems"]);
    },
  });

  if (!data) {
    return null;
  }
  const accommodation = data.accommodation;
  const startDate = dayjs(accommodation.checkIn);
  const endDate = dayjs(accommodation.checkOut);
  const startDateFormatted = startDate.format(FORMATTER);
  const endDateFormatted = endDate.format(FORMATTER);
  const diffDay = endDate.diff(startDate, "day");

  return (
    <>
      <div className="p-4 w-full bg-white relative shadow-md  mb-4">
        <div className="flex flex-col w-full p-5  divide-solid  divide-y-[1px] divide-subtitle-gray rounded-lg ">
          <div className="pb-6">
            <h3 className="block mb-4 font-bold text-3xl">
              {accommodation?.accommodationName}
            </h3>
            <div>
              <p className="text-gray-500 ">숙소 | {accommodation?.address}</p>
            </div>
          </div>
          <div className="pt-9 flex gap-6 flex-col">
            <h3 className="font-bold text-xl">{accommodation.room.roomName}</h3>
            <div className="flex flex-row h-20 items-start gap-4">
            {/* 체크박스 조건부 렌더링 */}
            {!hideCheckbox && ( 
              <CartCheckBox
                id={index}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
                setISCheckAllItems={setISCheckAllItems}
                isCheckPass={isCheckPass}
                setIsCheckPass={setIsCheckPass}
              />
              )}
              <img
                alt="상품 상세이미지"
                src={accommodation?.image}
                className="h-full w-28 block rounded-md bg-cover"
              />
              <div className=" flex flex-col gap-2">
                <div className=" flex flex-row gap-3 divide-solid divide-x-[2px] divide-subtitle-gray font-semibold text-sm">
                  <p>
                    {startDateFormatted} ~ {endDateFormatted}
                  </p>
                  <p className=" pl-2">{diffDay}박</p>
                </div>
                <div className=" flex flex-row gap-3 divide-solid divide-x-[2px] divide-subtitle-gray">
                  <p className="text-gray-500">체크인 15:00 </p>
                  <p className=" pl-2 text-gray-500">체크아웃 15:00 </p>
                </div>

                <p className="text-gray-500">{accommodation.peoples}명</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <p className="inline">{diffDay > 1 ? "연박" : "숙박"} </p>
                <p className="inline font-bold text-lg">
                  {accommodation.room.price.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 삭제 버튼 조건부 렌더링 */}
        {!hideCloseButton && (
          <div className="absolute top-10 right-10 ">
            <button
            onClick={() => {
              dataDelete(index);
            }}>
              <Icons
                type="CloseIcon"
                size="large"
                color="primary"
                additionalClass={"text-3xl"}
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
