"use client";
import React from 'react'

const CouponSlide = () => {
    return (
        <div className='flex items-center mb-4 flex-1 '>
            {/* 20,000원 쿠폰 */}
            <div className='mr-2 w-full h-[130px] cursor-pointer overflow-hidden rounded-xl hover:filter hover:brightness-95 transition duration-200 ease-in-out'>
                <img className="w-full h-full object-cover block" src="/couponImages/20000won.png" alt="" />
            </div>
            {/* 30,000원 쿠폰 */}
            <div className='mr-2 w-full h-[130px] cursor-pointer overflow-hidden rounded-xl hover:filter hover:brightness-95 transition duration-200 ease-in-out'>
                <img className="w-full h-full object-cover block" src="/couponImages/30000won.png" alt="" />
            </div>
            {/* 50,000원 쿠폰 */}
            <div className='w-full h-[130px] cursor-pointer overflow-hidden rounded-xl hover:filter hover:brightness-95 transition duration-200 ease-in-out border'>
                <img className="w-full h-full object-cover block" src="/couponImages/50000won.png" alt="" />
            </div>
        </div>
    );
}

export default CouponSlide
