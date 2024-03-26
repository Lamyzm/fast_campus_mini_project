"use client";
import React from 'react'

const CouponSlide = () => {
    return (
        <div className='flex items-center mt-4 mb-4 flex-1 '>
            <div className=' mr-4 rounded-xl w-full h-[150px] cursor-pointer overflow-hidden hover:filter hover:brightness-95 transition duration-200 ease-in-out '>
                <img className="rounded-xl w-full object-cover block" src="/couponImages/20000won.png" alt="" />
            </div>
            <div className='  mr-4 rounded-xl w-full h-[150px] cursor-pointer overflow-hidden hover:filter hover:brightness-95 transition duration-200 ease-in-out '>
                <img className="rounded-xl w-full object-cover block" src="/couponImages/30000won.png" alt="" />
            </div>
            <div className=' rounded-xl w-full h-[150px] cursor-pointer overflow-hidden hover:filter hover:brightness-95 transition duration-200 ease-in-out border '>
                <img className="rounded-xl w-full object-cover block" src="/couponImages/50000won.png" alt="" />
            </div>
        </div>
    )
}

export default CouponSlide
