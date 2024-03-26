"use client";

import Link from "next/link";
import { Button } from "../buttons/Button";
import Icons from "../icons/icons";

export default function BookingRoomComponent({ title, price }) {
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
                  "text-xs absolute -left-4 top-[2px] fill-subtitle-gray"
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
              <Link href="#">
                <Button
                  size="lg"
                  color="white"
                  outline="outlineSemi"
                  additionalClass="px-2">
                  <Icons
                    type="ShoppingCartOutlinedIcon"
                    size="large"
                    color="primary"
                  />
                </Button>
              </Link>
              <Link href="#">
                <Button
                  size="lg"
                  color="black"
                  additionalClass="w-full sm:px-12 font-bold text-sm">
                  예약하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
