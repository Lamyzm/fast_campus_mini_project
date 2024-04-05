'use client'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter, useSearchParams} from "next/navigation";
import 'dayjs/locale/ko'

export default function PaidOrder() {
  
    const queryClient = useQueryClient();
    const { data: reservation, isLoading, isError, error } = useQuery(["order"]);
    console.log(reservation);

    dayjs.locale('ko');

    const calculateNights = (checkIn, checkOut) => {
        return dayjs(checkOut).diff(checkIn, 'day');
    };

    const calculateDaysLeft = (checkIn) => {
      const today = dayjs();
      const daysLeft = dayjs(checkIn).diff(today, 'day');
      return daysLeft >= 1 ? `D-${daysLeft}` : '';
    };

    const totalPrice = reservation?.accommodation?.room.price;
    const formatPriceWithCommas = (price) => {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const totalPriceWithCommas = formatPriceWithCommas(totalPrice);

    const copyAddressToClipboard = () => {
      navigator.clipboard.writeText(reservation.accommodation.address);
    };

    if (!reservation || reservation.length === 0) {
        return (
            <div className="container mx-auto p-8">
                <p className="text-2xl font-semibold mb-7">상품 정보 0건</p>
                <p>예약된 상품이 없습니다.</p>
            </div>
        );
    }

    return (
      <div className="container mx-auto p-8 mt-3">
        <div className="mb-5 bg-white shadow-md rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="h-[280px]">
                    <img
                        src={reservation.accommodation?.image}
                        alt="Room"
                        className="w-full h-full object-cover md:w-[260px] md:h-[285px]"
                    />
                </div>
                <div className="p-6 ml-4 flex-grow flex-column items-center">
                    <p className=" text-blue-500">{calculateDaysLeft(reservation.accommodation.checkIn) !== '' && calculateDaysLeft(reservation.accommodation.checkIn)}</p>
                    <hr className="my-4" />
                    <h2 className="text-xl font-semibold mb-3">{reservation.accommodation.accommodationName}</h2>
                    <div className='flex flex-column gap-2 font-semibold text-gray-400'>
                      <p>{reservation.accommodation.room.roomName}</p> 
                      ·
                      <p>{reservation.accommodation.peoples}명</p>
                    </div>
                    <p className="text-gray-600 text-md my-7">{reservation.accommodation.address}</p>
                    {/* <div className="flex items-center my-4">
                      <p className="text-gray-600 text-md mr-1">{reservation.accommodation.address}</p>
                      <button onClick={copyAddressToClipboard} className=" text-blue-500 py-2 px-2 text-sm hover:font-semibold">주소 복사</button>
                    </div> */}
                    <div className='flex'>
                      <div className='mr-1 flex-column'>
                        <p className="text-gray-400 font-semibold text-sm mb-5">체크인</p>
                        <p className="text-[17px]">{dayjs(reservation.accommodation.checkIn).format('YYYY-MM-DD (ddd)')}</p>
                      </div>
                      <hr className="mx-7 border-l border-gray-600 h-14" />
                      <div className='ml-2 flex-column'>
                        <p className="text-gray-400 font-semibold text-sm mb-5">체크아웃</p>
                        <p className="text-[17px]">{dayjs(reservation.accommodation.checkOut).format('YYYY-MM-DD (ddd)')}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white shadow-md mt-7 p-6 rounded-xl">
          <div>
            <p className="font-bold text-2xl mb-6">결제 정보</p>
          </div>
          <div className="flex mb-3 justify-between text-lg text-stone-400">
            <p>상품 금액</p>
            <p>{totalPriceWithCommas}원</p>
          </div>
          <div className="flex mb-3 justify-between text-lg text-stone-400">
            <p>할인 금액</p>
            <p>0</p>
          </div>
          <hr className="my-6" />
          <div className="flex justify-between text-lg font-semibold text-blue-500">
            <p>총 결제 금액</p>
            <p>{totalPriceWithCommas}원</p>
          </div>
        </div>
      </div>
  );
}
