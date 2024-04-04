"use client";
import React, { useState, useEffect, useId } from "react";
import authApi from "@/service/axiosConfig";
import { useQuery } from "react-query";
import SelectedRoomPay from "@/components/selectedRoomPay/SelectedRoomPay";
import CartPrice from "@/components/cartPrice/CartPrice";
import CartItem from "./CartItem";
import CartAllCheckBox from "../CheckBox/CartAllCheckBox";
import CartLoadingDetail from "../Loading/CartLoadingDetail";
import { useRouter } from "next/navigation";
import Icons from "../icons/icons";
import { Button } from "../buttons/Button";
import AccommodationSwiper from "@/components/accommodationSwipers/AccommodationSwiper";
import useCartDataQuery from "@/hooks/useCartDataQuery";

export default function CartList() {
  const { checkedItems, setCheckedItems, cartData, isLoading, isError } =
    useCartDataQuery();

  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const router = useRouter();
  // const id = useId();

  const convertCheckedItemsToArray = () => {
    const resultArray = [];
    Object.entries(checkedItems).forEach(([key, value]) => {
      if (value === true) {
        resultArray.push({ orderId: parseInt(key, 10) });
      }
    });
    return resultArray;
  };

  const [isCartFetching, setIsCartFetching] = useState(false);
  const fetchCartData = () => {
    setIsCartFetching(true);
  };
  const fetchRoom = async () => {
    const requestBody = convertCheckedItemsToArray();
    const { data } = await authApi.post("/cart", requestBody);
    return data;
  };

  // 결제로직 query
  const cartQuery = useQuery({
    queryKey: ["cart"],
    queryFn: fetchRoom,
    enabled: isCartFetching,
  });
  console.log(cartQuery)

  useEffect(() => {
    // total price
    const totalPrice = cartData?.reduce((acc, item) => {
      if (checkedItems[item.id]) {
        acc += item.accommodation.room.price;
      }
      return acc;
    }, 0);
    setCartTotalPrice(totalPrice);
  }, [checkedItems, cartData]);

  const [isCheckAllItems, setISCheckAllItems] = useState(true);
  const [isCheckPass, setIsCheckPass] = useState(false);

  useEffect(() => {
    // 전체체크
    const setAllItems = (isCheck) => {
      const checkAllItems = {};
      for (const id in checkedItems) {
        checkAllItems[id] = isCheck;
      }
      setCheckedItems(checkAllItems);
    };
    if (isCheckAllItems && checkedItems && isCheckPass) {
      setAllItems(true);
    } else if (!isCheckAllItems && checkedItems && isCheckPass) {
      setAllItems(false);
    }
  }, [isCheckAllItems, setISCheckAllItems]);

  if (isLoading) {
    return (
      <>
        {[...Array(4)].map((_, index) => (
          <CartLoadingDetail key={index} />
        ))}
      </>
    );
  }

  if (cartData?.length === 0) {
    return (
      <>
        <div className="h-[80vh] w-full p-12 flex flex-col justify-center items-center gap-7">
          <div className="justify-self-center text-4xl">
            <Icons
              type="ShoppingCartOutlinedIcon"
              size="large"
              color="primary"
              className="text-6xl text-subtitle-gray"
            />
          </div>

          <div className="text-subtitle-gray">장바구니에 아무것도 없어요!</div>
          <div>
            <Button
              size="lg"
              color="primary"
              additionalClass="w-full justify-start item-center overflow-hidden text-ellipsis"
              onClick={() => router.push("/")}>
              홈으로 가기
            </Button>
          </div>
        </div>

        <AccommodationSwiper title="인기여행" />
      </>
    );
  }
  return (
    <>
      <div className="w-full h-32 flex flex-row p-9 relative z-10">
        <CartAllCheckBox
          isCheck={isCheckAllItems}
          setISCheckAllItems={setISCheckAllItems}
          isCheckPass={isCheckPass}
          setIsCheckPass={setIsCheckPass}
        />
        <div className="flex justify-center items-center">
          <p>전체선택 </p>
        </div>
      </div>
      {cartData ? (
        <>
          <div className="min-h-[60vh] w-full">
            {cartData.map((item, index) => {
              return (
                <CartItem
                  data={item}
                  key={`${index + 1}-${index}`}
                  index={item.id}
                  checkedItems={checkedItems}
                  setCheckedItems={setCheckedItems}
                  setISCheckAllItems={setISCheckAllItems}
                  isCheckPass={isCheckPass}
                  setIsCheckPass={setIsCheckPass}
                />
              );
            })}
          </div>
          <CartPrice price={cartTotalPrice} />
          <SelectedRoomPay
            fetchCartData={fetchCartData}
            price={cartTotalPrice}
            cartQuery={cartQuery}
            isCartFetching={isCartFetching} 
          />
        </>
      ) : null}
    </>
  );
}
