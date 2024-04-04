"use client";
import { useSubFilterStore } from '@/store/useSubFilterStore';
import React from 'react'

const RoomCategory = () => {

    const { category, setCategory } = useSubFilterStore()

    return (
        <>
            <div className="flex ml-4 mr-4 justify-between items-center w-[1100px] h-[70px] box-border bg-white" style={{ borderBottom: '1px solid #d2d2d2' }}>
                <div className="flex gap-10 items-center px-[20px] py-0 text-lg font-semibold">
                    <div href="/styleguide" className={`cursor-pointer ${category === "all" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("all")}>
                        <span>전체</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${category === "호텔" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("호텔")}>
                        <span>호텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${category === "모텔" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("모텔")}>
                        <span>모텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${category === "펜션" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("펜션")}>
                        <span>펜션</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${category === "게스트하우스" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("게스트하우스")}>
                        <span>게스트하우스</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${category === "콘도" ? "text-blue-500 underline" : "text-gray-500"}`} onClick={() => setCategory("콘도")}>
                        <span>콘도</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomCategory
