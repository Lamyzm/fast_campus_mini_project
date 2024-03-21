import React from 'react'
import Link from 'next/link'
import Icons from '../icons/icons'

const MainNav = () => {
    return (
        <>
            <div className="flex justify-between items-center fixed w-[1000px] h-[65px] top-0 shadow-md bg-white z-[100];">
                <Link className="text-blue-800 text-xl font-semibold cursor-pointer px-[18px] py-0" href="/">
                    3조화이팅
                </Link>
                <div className="flex gap-7 items-center px-[18px] py-0 text-lg font-semibold">
                    <Link href="/" className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
                        <span>장바구니<Icons className='mb-[2px]' type="ShoppingCartOutlinedIcon" size="large" color="primary" /></span>
                    </Link>
                    <Link href="/" className="cursor-pointer hover:text-gray-600 transition duration-100 ease-in-out">
                        <span>로그인<Icons className='mb-[2px]' type="LoginIcon" size="large" color="primary" /></span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MainNav
