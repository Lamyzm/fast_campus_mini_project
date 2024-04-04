'use client'
import React, { useEffect, useState } from "react";
import Icons from '../icons/icons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';

const ReservationsNav = ({pageTitle}) => {
    const router = useRouter();
    const pathName = usePathname();
    const [pageName, setPageName] = useState(null); 

      //페이지 path에 맞게 알아서 변경하기
    const matchPageName = (pathName) => {
    if (pathName === "/order") {
        setPageName("예약");
    }
    if (pathName === "/paid") {
        setPageName("예약 완료");
    }
};


    useEffect(() => {
    matchPageName(pathName);
    }, [pathName]);

    return (
        <>
            <div className="top-0 fixed flex justify-between items-center w-full h-[75px] shadow-sm bg-white z-[800];">
                <div className=" hover:text-gray-600 transition duration-100 text-xl font-semibold cursor-pointer px-[18px] py-0" href="/">
                    <Icons className='text-3xl' type="ArrowBackIcon" size="small" color="primary" onClick={() => router.back()} />
                </div>
                <div className="flex items-center py-0 text-xl font-semibold justify-center">
                    {pageName}
                </div>
                <div className="hover:text-gray-600 transition duration-100 text-xl font-semibold cursor-pointer px-[18px] py-0">
                    <Link href="/" className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
                        <span><Icons className='mb-[2px] text-3xl' type="HomeOutlinedIcon" size="large" color="primary" /></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ReservationsNav
