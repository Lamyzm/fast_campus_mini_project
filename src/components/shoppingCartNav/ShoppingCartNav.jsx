'use clinet'
import React from 'react'
import Icons from '../icons/icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const ShoppingCartNav = () => {
    const router = useRouter();
    return (
        <>
            {/* top-0 fixed추가하기 */}
            <div className="flex justify-between items-center w-[1000px] h-[65px] shadow-md bg-white z-[100];">
                <div className=" hover:text-gray-600 transition duration-100 text-xl font-semibold cursor-pointer px-[18px] py-0" href="/">
                    <Icons className='text-3xl' type="ArrowBackIcon" size="small" color="primary" onClick={() => router.back()} />
                </div>
                <div className="flex items-center py-0 text-xl font-semibold justify-center">
                    장바구니
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

export default ShoppingCartNav
