"use clinet";
import React, { useEffect, useState } from "react";
import Icons from "../icons/icons";
import { usePathname, useRouter } from "next/navigation";

const SelectNav = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [pageName, setPageName] = useState(null);

  //페이지 path에 맞게 알아서 변경하기
  const matchPageName = (pathName) => {
    if (pathName === "/search/place") {
      setPageName("지역선택");
    }
    if (pathName === "/search/date") {
      setPageName("날짜선택");
    }
    if (pathName === "/search/headcount") {
      setPageName("인원선택");
    }
  };

  useEffect(() => {
    matchPageName(pathName);
  }, [pathName]);

  return (
    <>
      <div className="flex justify-between items-center w-[1000px] h-[65px] bg-white z-[100] top-0 fixed">
        <div className="hover:text-gray-600 transition duration-100 flex items-center py-0 text-lg cursor-pointer font-semibold px-[18px]">
          <Icons
            className="text-3xl"
            type="ArrowBackIcon"
            size="small"
            color="primary"
            onClick={() => router.back()}
          />
        </div>
        <div className="flex ml-[232px] items-center py-0 text-xl font-semibold justify-center flex-grow">
          {pageName}
        </div>
        <div className="flex flex-grow"></div>
      </div>
    </>
  );
};

export default SelectNav;
