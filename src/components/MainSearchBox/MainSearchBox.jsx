import React from "react";
import { Button } from "../buttons/Button";
import { useRouter } from "next/navigation";
import Icons from "../icons/icons";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
dayjs.extend(utc);
dayjs.locale("ko");

export default function MainSearchBox({
  destination,
  startDate,
  endDate,
  headCount,
}) {
  let startDateFormatted = "";
  let endDateFormatted = "";
  const router = useRouter();
  if (startDate && endDate) {
    startDateFormatted = startDate.format("MM.DD ddd");
    endDateFormatted = endDate.format("MM.DD ddd");
  } else {
    startDate = dayjs();
    endDate = dayjs().add(1, "day");
    startDateFormatted = startDate.format("MM.DD ddd");
    endDateFormatted = endDate.format("MM.DD ddd");
  }
  const diffDay = endDate.diff(startDate, "day");

  const tailwindClass = "flex flex-row gap-2";
  return (
    <>
      <div
        className={`bg-white w-full  py-9 px-3 rounded-lg  items-center ${tailwindClass} flex-col lg:flex-row`}>
        <div
          className={`flex-col w-full ${tailwindClass} flex-grow lg:flex-row `}>
          <Button
            size="lg"
            color="gray"
            additionalClass="w-full  justify-start item-center overflow-hidden text-ellipsis"
            onClick={() => router.push("/search/place")}>
            <div className="flex flex-row item-center text-ellipsis ">
              <Icons
                type="LocationOnOutlinedIcon"
                size="large"
                color="primary"
                additionalClass="mr-2 fill-gray-400"
              />
              {destination ? (
                <p className="font-semibold overflow-hidden text-nowrap text-ellipsis ">
                  {destination}
                </p>
              ) : (
                <p className="text-gray-400 overflow-hidden text-nowrap text-ellipsis">
                  여행지나 숙소를 검색해보세요
                </p>
              )}
            </div>
          </Button>

          <Button
            size="lg"
            color="gray"
            additionalClass="w-full justify-start item-center h-auto min-h-10  lg:h-10"
            onClick={() => router.push("/search/date")}>
            <div className="flex flex-row item-center ">
              <Icons
                type="InsertInvitationIcon"
                size="large"
                color="primary"
                additionalClass="mr-2 fill-gray-400"
              />

              {
                <p className="font-semibold">{`${startDateFormatted} - ${endDateFormatted} (${diffDay}박)`}</p>
              }
            </div>
          </Button>
          <Button
            size="lg"
            color="gray"
            additionalClass="lg:w-[35%] w-full justify-start item-center"
            onClick={() => router.push("/search/headcount")}>
            <div className="flex flex-row item-center ">
              <Icons
                type="PermIdentityOutlinedIcon"
                size="large"
                color="primary"
                additionalClass="mr-2 fill-gray-400"
              />
              {headCount ? (
                <p className="font-semibold  w-full">인원 {headCount}</p>
              ) : (
                <p className="text-gray-400 ">인원 1</p>
              )}
            </div>
          </Button>
        </div>
        <Button size="lg" color="primary" additionalClass="w-36 flex-grow-0">
          <p className="font-bold flex-shrink-0">검색</p>
        </Button>
      </div>
    </>
  );
}
