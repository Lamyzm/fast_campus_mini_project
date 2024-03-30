"use client";
import React, { useState } from 'react'

const RoomCategory = ({ activeCategory, handleSelectCategory }) => {
    return (
        <>
            <div className="flex ml-4 justify-between items-center w-[1000px] h-[70px] bg-white">
                <div className="flex gap-10 items-center px-[20px] py-0 text-lg font-semibold">
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "all" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("all")}>
                        <span>전체</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "호텔" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("호텔")}>
                        <span>호텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "모텔" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("모텔")}>
                        <span>모텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "펜션" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("펜션")}>
                        <span>펜션</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "게스트하우스" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("게스트하우스")}>
                        <span>게스트하우스</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeCategory === "콘도" ? "text-black underline" : "text-gray-500"}`} onClick={() => handleSelectCategory("콘도")}>
                        <span>콘도</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomCategory
