import React, { useState } from 'react'
import RoomOutline from '../roomOutline/RoomOutline'
import BookingRoomComponent from '../BookingRoomComponent/BookingRoomComponent'

const RoomDetail = ({ data }) => {
    const [showOutline, setShowOutline] = useState(true);
    return (
        <>
            <div className="flex justify-start mb-4">
                {/* 개요 버튼 */}
                {data && (<div
                    className={` hover:border-b-2 border-solid border-black text-black font-bold py-4 px-10 rounded-lg ${showOutline ? 'border-b-2 border-solid border-black' : ''}`}
                    onClick={() => setShowOutline(true)}
                    style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '2rem' }}
                >
                    객실
                </div>)}
                {/* 객실 버튼 */}
                {data && (<button
                    className={`ml-4  hover:border text-black font-bold py-4 px-10 rounded-lg ${!showOutline ? 'border' : ''}`}
                    onClick={() => setShowOutline(false)}
                    style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '2rem' }}
                >
                    개요
                </button>)}
            </div>
            {/* 상태에 따라 해당 컴포넌트를 보여줌 */}
            {!showOutline ? (
                <RoomOutline data={data} />
            ) : (
                data?.roomList.map((item) => (
                    <BookingRoomComponent
                        key={item.id} // React에서는 map 함수로 생성된 여러 개의 컴포넌트에는 고유한 key prop이 필요합니다.
                        title={item.roomName}
                        price={item.price}
                        id={item.id}
                    />
                ))
            )}
        </>
    )
}

export default RoomDetail
