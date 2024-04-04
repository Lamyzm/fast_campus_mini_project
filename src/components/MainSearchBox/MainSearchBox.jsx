"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { useRouter } from "next/navigation";
import Icons from "../icons/icons";
import { useSearchFilterStore } from "@/store/useSearchFilterStore";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/ko";
import { useIsSearchedStore } from "@/store/useIsSearchStore";
import Link from "next/link";
dayjs.extend(utc);
dayjs.locale("ko");

export default function MainSearchBox() {
  //router -> Link로 바꾸기

  const { setIsSearched } = useIsSearchedStore();
  // 기존 코드 area, date, people를 가져오는동안 기본값이 표시됨.
  // const { area, date, people } = useSearchFilterStore()

  //추가
  const {
    area: initialArea,
    date: initialDate,
    people: initialPeople,
  } = useSearchFilterStore();
  const [area, setArea] = useState(initialArea);
  const [date, setDate] = useState(initialDate);
  const [people, setPeople] = useState(initialPeople);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialArea && initialDate && initialPeople) {
      setArea(initialArea);
      setDate(initialDate);
      setPeople(initialPeople);
      setLoading(false);
    }
  }, [initialArea, initialDate, initialPeople]);
  const tailwindClass = "flex flex-row gap-2";

  // 날짜 계산
  let startDate = date.startDate;
  let endDate = date.endDate;

  // startDate와 endDate가 dayjs 객체가 아닌 문자열일 경우 dayjs로 변환
  if (typeof startDate === "string") {
    startDate = dayjs(startDate);
  }
  if (typeof endDate === "string") {
    endDate = dayjs(endDate);
  }

  // startDate와 endDate가 정의되지 않았을 경우 기본값 설정
  if (!startDate || !endDate) {
    startDate = dayjs();
    endDate = dayjs().add(1, "day");
  }

  const diffDay = endDate.diff(startDate, "day");

  //인원수 계산
  const totalPeople = people?.adult + people?.kids + people?.baby;

  const handleClick = () => {
    setIsSearched();
  };

  if (loading) {
    return <p>.</p>;
  }

  return (
    <>
      <div
        className={`bg-white w-full  py-9 px-3 rounded-lg  items-center ${tailwindClass} flex-col lg:flex-row`}>
        <div
          className={`flex-col w-full ${tailwindClass} flex-grow lg:flex-row `}>
          {/* 지역 표시 */}
          <Link href="/search/place" prefetch={true} className="sm:w-full">
            <Button
              size="lg"
              color="gray"
              additionalClass="lg:w-[300px] w-full justify-start item-center overflow-hidden text-ellipsis ">
              <div className="flex flex-row item-center text-ellipsis ">
                <Icons
                  type="LocationOnOutlinedIcon"
                  size="large"
                  color="primary"
                  additionalClass="mr-2 fill-gray-400"
                />
                {/* area 기본값일시 분기처리 */}
                {area === "all" ? (
                  <p className="text-gray-400 overflow-hidden text-nowrap text-ellipsis">
                    여행지나 숙소를 검색해보세요
                  </p>
                ) : (
                  <p className="font-semibold overflow-hidden text-nowrap text-ellipsis ">
                    {area}
                  </p>
                )}
              </div>
            </Button>
          </Link>

          {/* 날짜표시 */}
          <Link href="/search/date" prefetch={true}>
            <Button
              size="lg"
              color="gray"
              additionalClass="lg:w-[300px] w-full justify-start item-center h-auto min-h-10  lg:h-10">
              <div className="flex flex-row item-center ">
                <Icons
                  type="InsertInvitationIcon"
                  size="large"
                  color="primary"
                  additionalClass="mr-2 fill-gray-400"
                />
                {
                  <p className="font-semibold">{`${startDate.format(
                    "MM-DD ddd"
                  )} - ${endDate.format("MM-DD ddd")} (${diffDay}박)`}</p>
                }
              </div>
            </Button>
          </Link>

          {/* 인원표시 */}
          <Link href="/search/headcount" prefetch={true}>
            <Button
              size="lg"
              color="gray"
              additionalClass="lg:w-[160px] w-full justify-start item-center h-auto min-h-10  lg:h-10">
              <div className="flex flex-row item-center justify-center">
                <Icons
                  type="PermIdentityOutlinedIcon"
                  size="large"
                  color="primary"
                  additionalClass="mr-2 fill-gray-400"
                />
                <p className="font-semibold  w-full">인원 {totalPeople}</p>
              </div>
            </Button>
          </Link>
        </div>

        {/* 전역으로 저장된 search param을 통해 검색 요청 */}
        <Link href="/room" prefetch={true}>
          <Button
            size="lg"
            color="primary"
            additionalClass="w-36 flex-grow-0"
            onClick={handleClick}>
            <p className="font-bold flex-shrink-0">검색</p>
          </Button>
        </Link>
      </div>
    </>
  );
}
