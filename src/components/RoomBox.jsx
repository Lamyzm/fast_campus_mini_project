import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    AiOutlineClose,
    AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

const RoomBox = ({ currentRoom, setCurrentRoom }) => {

    const [category, setCategory] = useState(currentRoom?.category)

    const checkCategory = () => {
        if (category === '호텔') {
            setCategory('호텔')
        }
        else if (category === '모텔') {
            setCategory('모텔')
        }
        else {
            setCategory('default')
        }
    }

    useEffect(() => {
        checkCategory()
    }, [])

    return (
        <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
            {currentRoom && (
                <>
                    <div className="p-8">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-4 items-center">
                                <Image
                                    src={`/markerImages/${category}.png`}
                                    width={40}
                                    height={40}
                                    alt="아이콘 이미지"
                                />
                                <div>
                                    <div className="font-semibold">{currentRoom?.accommodationName}</div>
                                    <div className="text-sm">{currentRoom?.detail}</div>
                                </div>
                            </div>
                            <button type="button" onClick={() => setCurrentRoom(null)}>
                                <AiOutlineClose />
                            </button>
                        </div>
                        <div className="flex justify-between gap-4">
                            <div className="mt-4 flex gap-2 items-center col-span-3">
                                <HiOutlineMapPin />
                                {currentRoom?.address || "주소가 없습니다."}
                            </div>
                        </div>
                        <div className="mt-2 flex gap-2 items-center">
                            <AiOutlinePhone />
                            {currentRoom?.tel || '전화번호가 등록되어있지 않습니다'}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default RoomBox
