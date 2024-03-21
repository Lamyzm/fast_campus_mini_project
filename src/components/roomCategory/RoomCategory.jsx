"use client";
import React, { useState } from 'react'

const RoomCategory = () => {
    const [activeTab, setActiveTab] = useState('all')
    return (
        <>
            <div className="flex ml-4 justify-between items-center w-[1000px] h-[70px] bg-white;">
                <div className="flex gap-10 items-center px-[20px] py-0 text-lg font-semibold">
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "all" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("all")}>
                        <span>전체</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "hotel" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("hotel")}>
                        <span>호텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "motel" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("motel")}>
                        <span>모텔</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "pension" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("pension")}>
                        <span>펜션</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "guesthouse" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("guesthouse")}>
                        <span>게스트하우스</span>
                    </div>
                    <div href="/styleguide" className={`cursor-pointer ${activeTab === "condo" ? "text-black" : "text-gray-500"}`} onClick={() => setActiveTab("condo")}>
                        <span>콘도</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomCategory
