"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import SelectedRoomMain from "@/components/selectedRoomMain/SelectedRoomMain";
import DetailNav from "@/components/detailNav/DetailNav";
import SelectedRoomDetailLayout from "@/components/SelectedRoomDetailLayout";
import RoomDetail from "@/components/roomdetail/RoomDetail";
import LoadingDetail from "../components/LoadingDetail";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import LoadingMap from "../components/LoadingMap";

const loadAddress = async (addr) => {
  if (window.kakao && window.kakao.maps) {
    const searchAddress = (addr) =>
      new Promise((resolve, reject) => {
        geocoder.addressSearch(addr, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            resolve(result);
          } else {
            reject(new Error("주소 검색 결과가 없습니다."));
          }
        });
      });
    const geocoder = new window.kakao.maps.services.Geocoder();
    const result = await searchAddress(addr);
    return result;
  }
};
const Mapcomp = ({ addrProp }) => {
  const [addr, setAddr] = useState(null);
  useEffect(() => {
    const fetchAddress = async () => {
      if (addrProp) {
        try {
          const res = await loadAddress(addrProp);
          console.log(res);
          setAddr(res[0]);
        } catch (error) {
          console.error("주소를 불러오는 데 실패했습니다.", error);
        }
      }
    };
    fetchAddress();
  }, [addrProp]);
  useEffect(() => {
    console.log(addr);
    console.log(addr?.x);
    console.log(addr?.y);
  }, [addr]);

  if (!addr) {
    return <LoadingMap />;
  }

  return (
    <Map
      center={{ lat: addr?.y, lng: addr?.x }}
      style={{ width: "100%", height: "360px" }}>
      <MapMarker position={{ lat: addr?.y, lng: addr?.x }}></MapMarker>
    </Map>
  );
};

const Page = ({ params }) => {
  const { id } = params;

  const fetchRoom = async () => {
    const { data } = await axios(
      `http://3.35.216.158:8080/api/accommodation/${id}`
    );
    return data;
  };

  const {
    data: room,
    isFetching,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["room", id],
    queryFn: fetchRoom,
  });

  if (isError) {
    return (
      <div className="w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold">
        다시 시도해주세요
      </div>
    );
  }
  if (isFetching) {
    <Loader />;
  }

  return (
    <>
      {isLoading && <LoadingDetail />}
      <DetailNav />
      <SelectedRoomDetailLayout>
        <SelectedRoomMain data={room} />
        <RoomDetail data={room} />
      </SelectedRoomDetailLayout>
      <Mapcomp addrProp={room?.address}></Mapcomp>
    </>
  );
};

export default Page;
