'use client'
import React, { useEffect } from "react";
import { SelectLayoutContainer } from "../SelectLayoutContainer";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LocationCategory = () => {
  const { searchData, setSearchData } = useSearch();
  const [active, setActive] = useState(null);
  const areaData = [
    { name: "서울", label: "강남 홍대 종로", style: "bg-blue-500", feature: "도심 속 휴식" },
    { name: "경기", label: "용인 가평 수원", style: "" },
    { name: "강원", label: "속초 강릉 춘천", style: "bg-blue-500", feature: "요즘 뜨는" },
    { name: "충청", label: "단양 제천 보령", style: "" },
    { name: "경상", label: "경주 거제 통영", style: "" },
    { name: "전라", label: "광주 전주 여수", style: "" },
    { name: "부산", label: "해운대 중구 남구", style: "" },
    { name: "제주", label: "서귀포 성산 애월", style: "bg-blue-500", feature: "언제나 인기" },
    { name: "인천", label: "송도 부평", style: "" },
  ];

  const router = useRouter();

  const handleClick = (areaName) => {
    setSearchData({ ...searchData, area: areaName });
    router.push("/");
  };

  const checkCurrentArea = () => {
    const area = searchData?.area;
    if (area) {
      setActive(area);
    }
  };

  useEffect(() => {
    checkCurrentArea();
  }, [searchData]);

  const getBackgroundColor = (areaName) => {
    return areaName === active ? "border-4 border-blue-500 bg-gray-100" : "border-2 border-solid border-gray-300";
  };

  return (
    <SelectLayoutContainer>
      <div className="grid grid-cols-3 border-2 border-solid border-gray-300">
        {areaData.map((area) => (
          <div
            key={area.name}
            className={`w-full h-[162px] flex flex-col items-center justify-center border-2 border-solid border-gray-300 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out ${getBackgroundColor(
              area.name
            )}`}
            onClick={() => handleClick(area.name)}
          >
            <div
              className={`w-[90px] text-sm rounded-full flex justify-center items-center text-white font-bold mb-1 ${area.style}`}
            >
              {area.feature && <>{area.feature}</>}
            </div>
            <p className="text-3xl font-bold">{area.name}</p>
            <p className="text-gray-500 mt-2 font-medium">{area.label}</p>
          </div>
        ))}
      </div>
    </SelectLayoutContainer>
  );
};

export default LocationCategory;