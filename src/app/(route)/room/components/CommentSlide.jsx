import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import RatingStar from "./RatingStar";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import commentsData from "@/assets/json/commentsData";

export default function CommentSlide({ comments }) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="mySwiper w-[300px] h-[120px]">
        {commentsData?.Data.map((comment) => (
          <SwiperSlide key={comment.key}>
            <div className=" flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex flex-col">
                <div className="text- font-semibold">
                  {comment.comment}
                  <div className="text-sm mt-2">
                    <RatingStar rating={comment.score} />
                  </div>
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
    </>
  );
}
