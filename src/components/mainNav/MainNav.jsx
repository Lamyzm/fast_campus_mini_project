"use client";
import React from "react";
import Link from "next/link";
import Icons from "../icons/icons";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const MainNav = () => {
  const cartItemCount = 5;
  const { data, status } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const handleAuthAction = (e) => {
    e.preventDefault();
    if (data) {
      signOut();
    } else {
      // 로그인되어 있지 않은 경우, 로그인 페이지로 리디렉션
      router.push("/login");
    }
  };
  console.log();
  if (router === "/testdetail") {
    console.log("test detail");
  }
  return (
    <>
      <div className="flex justify-between items-center fixed w-[1000px] h-[65px] top-0 shadow-sm bg-white z-[100] relative;">
        <Link
          className="text-blue-800 text-xl font-semibold cursor-pointer px-[18px] py-0"
          href="/main">
          3조화이팅
        </Link>
        <div className="flex gap-7 items-center px-[18px] py-0 font-semibold">

          <Link
            href="/cart"
            className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out relative">

            <Badge badgeContent={cartItemCount} color="primary">
            <Icons
                className="mb-[2px] text-3xl"
                type="ShoppingCartOutlinedIcon"
                size="large"
                color="primary"
              />
          </Badge>
          </Link>
          <Link
            href="/login"
            onClick={handleAuthAction}
            className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
            <span>
              <Icons
                className="mb-[2px] text-3xl"
                type="LoginIcon"
                size="large"
                color="primary"
              />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainNav;
