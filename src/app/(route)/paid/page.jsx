'use client'
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useQueryClient } from 'react-query';
import { useRouter, useSearchParams} from "next/navigation";

export default function Paid() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [queryKey, setQueryKey] = useState("");

    useEffect(() => {
        const params = useSearchParams();
        if (params.get("cart") === "cart") {
            setQueryKey('cart');
        } else if (params.get("order") === "paid") {
            setQueryKey('paid');
        }
    }, [router.asPath]);

    const reservations = queryClient.getQueryData([queryKey]);
    console.log("querykey:", queryKey);
    console.log(reservations);

    dayjs.locale('ko');

    const calculateNights = (checkIn, checkOut) => {
        return dayjs(checkOut).diff(checkIn, 'day');
    };

    const totalPrice = reservations?.reduce((acc, reservation) => acc + reservation.accommodation.room.price, 0);

    if (!reservations || reservations.length === 0) {
        return (
            <div className="container mx-auto p-8">
                <p className="text-2xl font-semibold mb-7">상품 정보 0건</p>
                <p>예약된 상품이 없습니다.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <p className="text-2xl font-semibold mb-7">상품 정보 {reservations?.length}건</p>
            {reservations?.map(reservation => (
                <div key={reservation.orderId} className="mb-5 bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-full">
                            <img
                                src={reservation.accommodation.image}
                                alt="Room"
                                className="w-full h-full object-cover md:w-[250px] md:h-[220px]"
                            />
                        </div>
                        <div className="p-6 ml-4 flex-column items-center">
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
    );
}
