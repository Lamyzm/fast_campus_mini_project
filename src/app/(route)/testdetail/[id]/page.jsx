"use client";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import SelectedRoomMain from "@/components/selectedRoomMain/SelectedRoomMain";
import DetailNav from "@/components/detailNav/DetailNav";
import SelectedRoomDetailLayout from "@/components/SelectedRoomDetailLayout";
import RoomDetail from "@/components/roomdetail/RoomDetail";
import LoadingDetail from "../components/LoadingDetail";

const Page = ({ params }) => {
  const { id } = params;
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const fetchRoom = async () => {
    const { data } = await axios(
      `http://183.96.51.234:8080/api/accommodation/${id}`
    );
    return data;
  };

  const fetchLocation = (address) => {
    const axios = require("axios");
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
      headers: {
        Authorization: "KakaoAK 87c35d760084065f3b62bab317fdd18b",
      },
    };
    axios
      .request(config)
      .then((response) => {
        setLng(response.data.documents[0].x);
        setLat(response.data.documents[0].y);
      })
      .catch((error) => {
        console.log(error);
      });
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
    onSuccess: (data) => fetchLocation(data.address),
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
        <RoomDetail data={room} lat={lat} lng={lng} />
      </SelectedRoomDetailLayout>
    </>
  );
};

export default Page;
