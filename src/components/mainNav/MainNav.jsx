"use client";
import React from "react";
import Link from "next/link";
import Icons from "../icons/icons";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Badge from "@mui/material/Badge";
import ShoppingCartNav from "@/components/shoppingCartNav/ShoppingCartNav";
import useCartDataQuery from "@/hooks/useCartDataQuery";
import ReservationsNav from "../reservationsNav/ReservationsNav";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Button } from "../buttons/Button";
const MainNav = () => {
  const { cartDataLength } = useCartDataQuery();
  const cartItemCount = cartDataLength;
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
  const cartAction = (e) => {
    e.preventDefault();
    if (data) {
      router.push("/cart");
    } else {
      alert("로그인이 필요한 서비스입니다");
      router.push("/login");
    }
  };
  if (pathName === "/cart") {
    return <ShoppingCartNav />;
  }
  if (pathName === "/paidcart") {
    return <ReservationsNav />;
  }
  if (pathName === "/paidorder") {
    return <ReservationsNav />;
  }
  if (pathName === "/orders") {
    return <ReservationsNav />;
  }
  return (
    <>
      <div
        className="tooltip-container flex justify-between items-center fixed w-[100%] h-[75px] top-0 pr-20 bg-white z-[100] relative;"
        style={{ borderBottom: "1px solid #d2d2d2" }}>
        <Link
          className="text-blue-800 text-xl font-semibold cursor-pointer ml-10 py-0"
          href="/main">
          <Image src="/logo.png" alt={"logo"} width={170} height={80} />
        </Link>
        <div className="flex gap-7 items-center px-[18px] py-0 font-semibold mr-4">
          <Link
            href="/cart"
            onClick={cartAction}
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
            id="clickable"
            href={data ? "/logout" : "/login"}
            onClick={handleAuthAction}
            className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
            <span>
              {data ? (
                <Icons
                  className="mb-[2px] text-3xl"
                  type="LogoutIcon"
                  size="large"
                  color="primary"
                />
              ) : (
                <Icons
                  className="mb-[2px] text-3xl"
                  type="LoginIcon"
                  size="large"
                  color="primary"
                />
              )}
            </span>
          </Link>
          {!data ? (
            <Tooltip
              anchorSelect="#clickable"
              place="bottom"
              clickable
              className="tooltip ">
              <Button size="lg" color="primary" additionalClass="w-full px-10 ">
                <Link href={"/login"}>로그인</Link>
              </Button>
            </Tooltip>
          ) : (
            <Tooltip
              anchorSelect="#clickable"
              place="bottom"
              clickable
              className="tooltip ">
              <Button size="lg" color="primary" additionalClass="w-full px-10 ">
                <Link href={"/#"}>로그아웃</Link>
              </Button>
            </Tooltip>
          )}
        </div>
      </div>
    </>
  );
};

export default MainNav;
