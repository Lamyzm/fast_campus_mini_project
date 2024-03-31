import React from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { useQuery } from 'react-query';
import axios from 'axios';
import RecommendRoom from './RecommendRoom';
import { useSearchFilterStore } from '@/store/useSearchFilterStore';

const NoSearchRoom = () => {
    const {area} = useSearchFilterStore()

    const fetchRecommendRoom = async () => {
        const { data } = await axios.get(`http://3.35.216.158:8080/api/accommodation?area=${area}&page=0`)
        return data
    }

    const { data: recommendRoom } = useQuery({
        queryKey: ['recommend', area],
        queryFn: fetchRecommendRoom,
    })

    return (
        <>
            <div className="flex items-center justify-center h-full text-gray-500 mt-12">
                <div className="text-center">
                    <ErrorOutlineOutlinedIcon style={{ fontSize: '70px' }} />
                    <p className="text-xl mt-4">조건에 일치하는 결과가 없습니다.</p>
                </div>
            </div>
            <div className='w-full px-8 py-8 mt-12'>
                <div className='text-xl font-bold text-gray-800'>앗! 찾으시는 숙소가 없네요</div>
                <div className='text-base font-bold text-gray-600'> 이런 숙소는 어떠신가요?</div>
                {recommendRoom?.content.map((item) => (
                    <RecommendRoom data={item} key={item.id} />
                ))}
            </div>
        </>
    );
};

export default NoSearchRoom;