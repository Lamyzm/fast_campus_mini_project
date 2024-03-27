'use client'
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Loader from '../components/Loader';
import SelectedRoomMain from '@/components/selectedRoomMain/SelectedRoomMain';
import DetailNav from '@/components/detailNav/DetailNav';
import SelectedRoomDetailLayout from '@/components/SelectedRoomDetailLayout';
import RoomDetail from '@/components/roomdetail/RoomDetail';
import LoadingDetail from '../components/LoadingDetail';



const Page = ({ params }) => {
    const { id } = params

    const fetchRoom = async () => {
        const { data } = await axios(`http://3.35.216.158:8080/api/accommodation/${id}`)
        return data
    }

    const { data: room, isFetching, isError, isSuccess, isLoading } = useQuery({
        queryKey: ['room', id],
        queryFn: fetchRoom
    })


    if (isError) {
        return (
            <div className="w-full h-screen mx-auto pt-[10%] text-red-500 text-center font-semibold">
                다시 시도해주세요
            </div>
        );
    }
    if (isFetching) {
        <Loader />
    }

    return (
        <>
            {isLoading && (<LoadingDetail />)}
            <DetailNav />
            <SelectedRoomDetailLayout>
                <SelectedRoomMain data={room} />
                <RoomDetail data={room} />
            </SelectedRoomDetailLayout>
        </>
    )
}

export default Page
