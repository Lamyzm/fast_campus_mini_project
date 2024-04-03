import React, { useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import { useQuery } from "react-query";
import LoadingButton from "@/components/buttons/LoadingButton";
import { useRouter } from "next/navigation";
import { Api } from "@/service/api";

const LOADING_TIME = 4000;

const OrderRoomPay = ({ price }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const router = useRouter();

  const handleOnClick = () => {
    if (!isChecked || price < 0) return;
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
    if (!isMoved && showLoadingIndicator) {
    }
  }, [showLoadingIndicator]);


  useEffect(() => {
    if (isMoved && !showLoadingIndicator) {
      router.push("/paid");
    }
  }, [showLoadingIndicator]);

  // Example function for placing order
  const placeOrder = async () => {
    try {
      // Perform API call to place order
      const response = await Api.post("/order", { price });
      console.log("Order placed successfully:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("결제에 실패했습니다 다시 시도해주세요");
      router.refresh();
    }
  };

  return (
    <div className="w-full mx-auto px-6">
      <div className="mb-4 flex">
        <input
          type="checkbox"
          checked={isChecked}
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
          <Button
            size="lg"
            color="primary"
            additionalClass="w-full"
            onClick={handleOnClick}
            disabled={!(isChecked && parseInt(price, 10) > 0)}
          >
            {showLoadingIndicator ? (
              <LoadingButton />
            ) : (
              <span className="font-bold text-xl tracking-wider">
                {price?.toLocaleString()}원 결제하기
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderRoomPay;
