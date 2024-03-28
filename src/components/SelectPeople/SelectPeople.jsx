"use client";
import React, { useState, useId, useEffect } from "react";
import { SelectLayoutContainer } from "../SelectLayoutContainer";
import Icons from "../icons/icons";
import { Button } from "@/components/buttons/Button";
import { useSearch } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

const guestTypes = {
  adult: "adult",
  child: "child",
  kid: "kid",
};

const SelectItem = ({ label, description, formId, type }) => {
  const [peopleCount, setPeopleCount] = useState(0);
  useEffect(() => {
    if (type == guestTypes.adult) {
      setPeopleCount(1);
    }
  }, []);

  const checkPeopleCount = (cnt) => {
    if (0 > cnt) return;
    setPeopleCount(cnt);
  };
  return (
    <div className="flex flex-row justify-between p-5">
      <div className="flex flex-col gap-2">
        <p className="block font-bold text-xl">{label}</p>
        <p className="block text-gray-400">{description}</p>
      </div>
      <div className="flex flex-row justify-center justify-items-center gap-3">
        <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
          <Button
            size="sm"
            outline="outlineSemi"
            additionalClass="rounded-full px-0 h-12 w-12 p-2"
            onClick={() => checkPeopleCount(peopleCount - 1)}
            type="button">
            <Icons type="RemoveIcon" size="large" color="primary" />
          </Button>
        </div>
        <div className="flex justify-center justify-items-center text-center items-center">
          {/* 폼요청 보내기 위한 hidden input */}
          <input type="hidden" name={formId} value={peopleCount} />
          <p className="min-w-10 font-semibold text-xl">{peopleCount}</p>
        </div>
        <div className="bg-white rounded-full flex border-solid justify-center justify-items-center">
          <Button
            size="sm"
            outline="outlineSemi"
            additionalClass="rounded-full px-0 h-12 w-12 p-2"
            onClick={() => checkPeopleCount(peopleCount + 1)}
            type="button">
            <Icons type="AddIcon" size="large" color="primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function SelectPeople() {
  const id = useId();
  const { searchData, setSearchData } = useSearch();
  const router = useRouter();
  const formIdArray = Object.keys(guestTypes)
    .map((val) => {
      return { [val]: `${id}-${val}` };
    })
    .reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});

  const formAction = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let count = 0;
    for (const guest in guestTypes) {
      count += parseInt(formData.get(formIdArray[guest]));
    }
    setSearchData({ ...searchData, headCount: count });
    router.push("/");
  };
  return (
    <>
      <SelectLayoutContainer>
        <div className="rounded-xl shadow-md p-4">
          <h3 className="font-bold text-2xl p-2">게스트는 누구인가요?</h3>
          <form action="" onSubmit={formAction}>
            <SelectItem
              label="성인"
              description="13세 이상"
              formId={formIdArray[guestTypes.adult]}
              type={guestTypes.adult}
            />
            <SelectItem
              label="어린이"
              description="3세 이상 13세 미만"
              formId={formIdArray[guestTypes.child]}
              type={guestTypes.child}
            />
            <SelectItem
              label="유아"
              description="2세 이하"
              formId={formIdArray[guestTypes.kid]}
              type={guestTypes.kid}
            />
            {/* {submit 버튼으로 요청 보내면됨} */}
            <div className="flex flex-row justify-end">
              <Button
                size="lg"
                type="rounded"
                color="primary"
                additionalClass="mt-12"
                onSubmit={true}>
                확인
              </Button>
            </div>
          </form>
        </div>
      </SelectLayoutContainer>
    </>
  );
}
