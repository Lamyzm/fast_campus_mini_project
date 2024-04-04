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

  return (
    <>
      <div className="flex mb-4">
        {data && (
          <div
            className={` cursor-pointer text-black font-bold py-4 px-10 hover:border-b-2 border-solid border-black ${
              activeTap === "room" ? "border-b-2 border-solid border-black" : ""
            }`}
            onClick={() => setActiveTap("room")}
            style={{
              fontSize: "1.3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}>
            객실
          </div>
        )}

        {data && (
          <div
            className={`ml-24 cursor-pointer text-black font-bold py-4 px-10 hover:border-b-2 border-solid border-black ${
              activeTap === "outline"
                ? "border-b-2 border-solid border-black"
                : ""
            }`}
            onClick={() => setActiveTap("outline")}
            style={{
              fontSize: "1.3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}>
            개요
          </div>
        )}

        {data && (
          <div
            className={`ml-24 cursor-pointer text-black font-bold py-4 px-10 hover:border-b-2 border-solid border-black ${
              activeTap === "location"
                ? "border-b-2 border-solid border-black"
                : ""
            }`}
            onClick={() => setActiveTap("location")}
            style={{
              fontSize: "1.3rem",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}>
            위치
          </div>
        )}
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
        </>
      )}
    </>
  );
};

export default RoomDetail;
