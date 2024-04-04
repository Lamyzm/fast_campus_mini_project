"use client";
import React, { useState } from "react";
import RoomOutline from "../roomOutline/RoomOutline";
import BookingRoomComponent from "../BookingRoomComponent/BookingRoomComponent";
import Map from "../Map";
import Marker from "../Marker";
import RoomBox from "../RoomBox";

const RoomDetail = ({ data }) => {
  const [activeTap, setActiveTap] = useState("room");
  const [currentRoom, setCurrentRoom] = useState(null);

  const copyAddressToClipboard = () => {
    if (data && data.address) {
      navigator.clipboard.writeText(data.address);
      alert("주소가 복사되었습니다");
    }
  };

  return (
    <>
      <div className="flex mb-4">
        {data && (
          <div
            className={` cursor-pointer text-black font-bold py-4 px-10 border-b-2 border-solid ${activeTap === "room" ? "border-black" : ""}`}
            onClick={() => setActiveTap("room")}
            style={{
              fontSize: "1.3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
              color: activeTap === "room" ? "#1478CD" : "#505050",
              borderBottomColor: activeTap === "room" ? "#1478CD" : "transparent", // 선택된 상태일 때의 border 색상 지정
              borderColor: activeTap === "room" ? "#1478CD" : "transparent" // hover 상태일 때의 border 색상 지정
            }}>
            객실
          </div>
        )}

        <div
          className={`ml-24 cursor-pointer text-black font-bold py-4 px-10 border-b-2 border-solid ${activeTap === "outline" ? "border-black" : ""}`}
          onClick={() => setActiveTap("outline")}
          style={{
            fontSize: "1.3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            color: activeTap === "outline" ? "#1478CD" : "#505050",
            borderBottomColor: activeTap === "outline" ? "#1478CD" : "transparent", // 선택된 상태일 때의 border 색상 지정
            borderColor: activeTap === "outline" ? "#1478CD" : "transparent" // hover 상태일 때의 border 색상 지정
          }}>
          개요
        </div>

        <div
          className={`ml-24 cursor-pointer text-black font-bold py-4 px-10 border-b-2 border-solid ${activeTap === "location" ? "border-black" : ""}`}
          onClick={() => setActiveTap("location")}
          style={{
            fontSize: "1.3rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            color: activeTap === "location" ? "#1478CD" : "#505050",
            borderBottomColor: activeTap === "location" ? "#1478CD" : "transparent", // 선택된 상태일 때의 border 색상 지정
            borderColor: activeTap === "location" ? "#1478CD" : "transparent" // hover 상태일 때의 border 색상 지정
          }}>
          위치
        </div>
      </div>
      {/* 상태에 따라 해당 컴포넌트를 보여줌 */}
      {activeTap === "room" &&
        data?.roomList.map((item) => (
          <BookingRoomComponent
            key={item.id} // React에서는 map 함수로 생성된 여러 개의 컴포넌트에는 고유한 key prop이 필요합니다.
            title={item.roomName}
            price={item.price}
            id={data?.id}
            roomId={item.id}
            roomData={item}
            totalRoomData={data}
          />
        ))}
      {activeTap === "outline" && <RoomOutline data={data} />}
      {activeTap === "location" && (
        <>
          <Map />
          <Marker data={data} />
          <RoomBox currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
          <div className='rounded-xl flex items-end mb-4 bg-gray-100 px-12 py-2' style={{ border: '1px solid #d2d2d2' }}>
            <div className='text-lg text-gray-500 font-bold' style={{ marginRight: "1rem" }}>{data?.address}</div>
            <button
              className="bg-blue-500"
              style={{
                padding: "0.3rem 0.7rem",
                fontSize: "1rem",
                color: "#fff",
                border: "1px solid #007bff", // 추가된 border 값
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={copyAddressToClipboard}
            >
              주소 복사
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default RoomDetail;
