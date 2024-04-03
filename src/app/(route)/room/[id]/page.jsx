'use client'
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import SelectedRoomMain from '@/components/selectedRoomMain/SelectedRoomMain';
import DetailNav from '@/components/detailNav/DetailNav';
import SelectedRoomDetailLayout from '@/components/SelectedRoomDetailLayout';
import RoomDetail from '@/components/roomdetail/RoomDetail';
import { useLocationStore } from '@/store/useLocationStore';
import Loader from '../components/Loader';
import LoadingDetail from '../components/LoadingDetail';

const Page = ({ params }) => {
  const { id } = params
  const { setNewLocation } = useLocationStore()

  const fetchRoom = async () => {
    const { data } = await axios(`https://fcbe-mini-project.kro.kr:8080/api/accommodation/${id}`)
    return data
  }

  const fetchLocation = (address) => {
    const axios = require('axios');
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
      headers: {
        'Authorization': 'KakaoAK 87c35d760084065f3b62bab317fdd18b'
      },
    };
    axios.request(config)
      .then((response) => {
        setNewLocation({
          lat: response.data.documents[0].y,
          lng: response.data.documents[0].x
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const fetchComments = async () => {
    const { data } = await axios.get(`https://fcbe-mini-project.kro.kr:8080/api/comment/${roomId}`)
    return data

  }

  const { data: room, isFetching, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['room', id],
    queryFn: fetchRoom,
    onSuccess: (data) => fetchLocation(data.address)
  })

  const roomId = room?.id

  //필요충분 쿼리를 사용해 roomId를 가져오면 comments가져오기
  const { data: comments } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
    enabled: !!roomId
  })

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
      {isLoading && (<LoadingDetail />)}
      <DetailNav />
      <SelectedRoomDetailLayout>
        <SelectedRoomMain data={room} comments={comments} />
        <RoomDetail data={room} />
      </SelectedRoomDetailLayout>
    </>
  )
}

export default Page;
