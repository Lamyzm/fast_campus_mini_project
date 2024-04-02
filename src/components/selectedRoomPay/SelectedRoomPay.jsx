"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { useQuery } from "react-query";
import LoadingButton from "@/components/buttons/LoadingButton";
import { useRouter } from "next/navigation";

const LOADING_TIME = 4000;

const SelectedRoomPay = ({
  price,
  fetchCartData,
  cartQuery,
  isCartFetching,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const router = useRouter();
  console.log(cartQuery);
  const handleOnClick = () => {
    console.log("price", price);
    if (price < 0) return;
    fetchCartData(true);
    setShowLoadingIndicator(true);
    setIsMoved(true);
    setTimeout(() => {
      setShowLoadingIndicator(false);
    }, LOADING_TIME);
  };
  useEffect(() => {
    setIsMoved(false);
  }, []);
  useEffect(() => {
    if (
      (cartQuery?.isSuccess,
      !cartQuery?.isLoading,
      !showLoadingIndicator,
      !cartQuery?.isError,
      isMoved)
    ) {
      router.push("/test");
    }
  }, [cartQuery?.isSuccess, cartQuery?.isLoading, showLoadingIndicator]);

  useEffect(() => {
    if (isCartFetching && cartQuery.isError) {
      alert("결제에 실패했습니다 다시 시도해주세요");
      router.refresh();
    }
  }, [cartQuery?.isError]);
  return (
    <div className="w-full mx-auto px-6">
      <div className="mb-4 flex">
        <input
          type="checkbox"
          disabled={!(parseInt(price, 10) > 0)}
          onChange={() => setIsChecked((prev) => !prev)}
          className="mr-2 h-5 w-5 cursor-pointer"
        />
        <p style={{ marginTop: "2px" }}>[필수] 만 14세 이상 이용 동의</p>
      </div>
      <div className="mb-5">
        <div className="mb-3">
          <span className="text-blue-800 underline">
            이용규칙, 취소 및 환불 규칙
          </span>{" "}
          에 동의하실 경우 결제하기를 클릭해주세요.
        </div>
        <div>
          {
            <Button
              size="lg"
              color="primary"
              additionalClass="w-full"
              onClick={handleOnClick}
              disabled={!(isChecked && parseInt(price, 10) > 0)}>
              {showLoadingIndicator || cartQuery?.isLoading ? (
                <LoadingButton></LoadingButton>
              ) : (
                <span className="font-bold text-xl tracking-wider">
                  {price?.toLocaleString()}원 결제하기
                </span>
              )}
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default SelectedRoomPay;
