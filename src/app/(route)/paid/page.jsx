'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationsNav from "@/components/reservationsNav/ReservationsNav"
import dayjs from 'dayjs';
import 'dayjs/locale/ko'
import { useQueryClient } from 'react-query';


  export default function Paid() {
      const queryClient = useQueryClient();
      const reservations = queryClient.getQueryData(["cart"]);

  dayjs.locale('ko');

  //몇박인지 계산
  const calculateNights = (checkIn, checkOut) => {
    return dayjs(checkOut).diff(checkIn, 'day');
  };

  // 전체 객실 가격 계산
  const totalPrice = reservations.reduce((acc, reservation) => acc + reservation.accommodation.room.price, 0);

  return (
    <>
      <div className="container mx-auto p-8">
        {/* <h1 className="text-xl font-semibold mb-4">예약이 완료되었습니다!</h1> */}
        <p className="text-xl font-semibold mb-7">상품 정보 {reservations.length}건</p>
        {reservations.map(reservation => (
          <div key={reservation.orderId} className="mb-5 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="m-6">
                <img
                    src={reservation.accommodation.image}
                    alt="Room"
                    className="w-full h-auto rounded-lg md:w-[210px] md:h-[180px] md:object-contain md:rounded-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{reservation.accommodation.accommodationName}</h2>
                <p className="text-gray-500 mb-4">{reservation.accommodation.address}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex mb-3 text-sm">
                      <p className="text-gray-400 w-[60px]">일정:</p>
                      <p>{dayjs(reservation.accommodation.checkIn).format('YYYY-MM-DD (ddd)')} ~ {dayjs(reservation.accommodation.checkOut).format('YYYY-MM-DD (ddd)')} | {calculateNights(reservation.accommodation.checkIn, reservation.accommodation.checkOut)}박</p>
                    </div>
                    <div className="flex mb-3 text-sm">
                      <p className="text-gray-400 w-[60px]">객실명:</p>
                      <p>{reservation.accommodation.room.roomName}</p>
                    </div>
                    <div className="flex mb-3 text-sm">
                      <p className="text-gray-400 w-[60px]">인원:</p>
                      <p>{reservation.accommodation.peoples}명</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-white shadow-md rounded-lg p-6 flex justify-end">
          <h2 className="text-lg text-gray-500 mr-5">총 결제 금액:</h2>
          <p className="text-xl font-semibold">{totalPrice} 원</p>
        </div>
      </div>
    </>
  );
}
