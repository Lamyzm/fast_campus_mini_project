import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import RatingStar from './RatingStar';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function CommentSlide({ comments }) {


    const extendedComments = Array.from({ length: 10 }, (_, index) => comments[0]);

    return (
        <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Mousewheel, Pagination]}
            className="mySwiper w-[300px] h-[100px]"
        >
            {extendedComments?.map((comment) => (
                <SwiperSlide key={comment?.key} >
                    <div className='bg-white flex items-center justify-between p-4 border border-gray-200 rounded-lg'>
                        <div className="flex flex-col">
                            <div className="text-lg font-semibold">
                                {comment?.comment}
                                <RatingStar rating={comment?.score} />
                            </div>
                            <div className="flex items-center mt-2">
                                <PersonPinIcon color="action" />
                                <span className="ml-2 text-gray-500">익명</span>
                            </div>
                        </div>
                        <div className="ml-4 text-gray-500 mb-[34px]">
                            <FormatQuoteIcon fontSize="large" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}