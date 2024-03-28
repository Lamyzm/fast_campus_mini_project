"use client";
import React from "react";
import { SelectLayoutContainer } from "../SelectLayoutContainer";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

const LocationCategory = () => {
  const { searchData, setSearchData } = useSearch();
  const router = useRouter();
  const handleClick = (event) => {
    const container = event.target.closest(".grid-cols-3 > div");
    const firstPText = container.querySelector("p").textContent;
    setSearchData({ ...searchData, area: firstPText });
    router.push("/");
  };

  return (
    <SelectLayoutContainer>
      <div className="grid grid-cols-3 border-2 border-solid border-gray-300">
        <div className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
          <div className="mb-6" onClick={handleClick}>
            <div className="w-[90px] text-sm bg-blue-500 rounded-full flex justify-center items-center text-white font-bold mb-1">
              일상 속 여유
            </div>
            <p className="text-3xl font-bold flex justify-center items-center">
              서울
            </p>
            <p className="text-gray-500 mt-2 font-medium flex justify-center items-center">
              강남 홍대 종로
            </p>
          </div>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className=" text-3xl font-bold">경기</p>
          <p className="text-gray-500 mt-2 font-medium">용인 가평 수원</p>
        </div>

        <div className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
          <div className="mb-6" onClick={handleClick}>
            <div className="w-[90px] text-sm bg-blue-500 rounded-full flex justify-center items-center text-white font-bold mb-1">
              요즘 뜨는
            </div>
            <p className="text-3xl font-bold flex justify-center items-center">
              강원
            </p>
            <p className="text-gray-500 mt-2 font-medium flex justify-center items-center">
              속초 강릉 춘천
            </p>
          </div>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className="text-3xl font-bold">충청</p>
          <p className="text-gray-500 mt-2 font-medium">단양 제천 보령</p>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className="text-3xl font-bold">경상</p>
          <p className="text-gray-500 mt-2 font-medium">경주 거제 통영</p>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className="text-3xl font-bold">전라</p>
          <p className="text-gray-500 mt-2 font-medium">광주 전주 여수</p>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className="text-3xl font-bold">부산</p>
          <p className="text-gray-500 mt-2 font-medium">해운대 중구 남구</p>
        </div>

        <div className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out">
          <div
            className="mb-6 flex flex-col justify-center items-center "
            onClick={handleClick}>
            <div className="w-[90px] text-sm bg-blue-500 rounded-full flex justify-center items-center text-white font-bold mb-1">
              언제나 인기
            </div>
            <p className="text-3xl font-bold flex justify-center items-center">
              제주
            </p>
            <p className="text-gray-500 mt-2 font-medium flex justify-center items-center">
              서귀포 성산 애월
            </p>
          </div>
        </div>

        <div
          className="w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
          onClick={handleClick}>
          <p className="text-3xl font-bold">인천</p>
          <p className="text-gray-500 mt-2 font-medium">송도 부평</p>
        </div>
      </div>
    </SelectLayoutContainer>
  );
};

export default LocationCategory;
