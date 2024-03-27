'use clinet'
import React from 'react'
import Icons from '../icons/icons'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DetailNav = () => {
    const router = useRouter();
    const cartItemCount = 5;

    return (
        <>
            {/* top-0 fixed추가하기 */}
            <div className="top-0 fixed flex justify-between items-center w-[1000px] h-[65px] shadow-md bg-white z-[100];">
                <div className=" hover:text-gray-600 transition duration-100 text-xl font-semibold cursor-pointer px-[18px] py-0" href="/">
                    <Icons className='text-3xl' type="ArrowBackIcon" size="small" color="primary" onClick={() => router.back()} />
                </div>
                <div className="flex gap-7 items-center px-[18px] py-0 text-xl font-semibold">
                    <Link href="/" className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
                        <span><Icons className='mb-[2px] text-3xl' type="HomeOutlinedIcon" size="large" color="primary" /></span>
                    </Link>
                    <Link href="/" className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out relative">
                        <span>
                            <Icons className='mb-[2px] text-3xl' type="ShoppingCartOutlinedIcon" size="large" color="primary" />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 -right-[5px] bg-blue-500 rounded-full text-white text-xs px-1">{cartItemCount}</span>
                            )}
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DetailNav
