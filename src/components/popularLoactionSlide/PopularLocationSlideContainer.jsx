"use client";
import React from "react";
import PopularLocationSlide from "./PopularLocationSlide";

const PopularLocationSlideContainer = () => {
  return (
    <section className="w-full relative main-section-padding box-border">
      <div>
        <div className="flex items-center justify-between">
          <h1 style={{ fontWeight: "600", fontSize: "20px" }}>
            국내 인기 여행지
          </h1>
        </div>
      </div>
      <PopularLocationSlide />
    </section>
  );
};

export default PopularLocationSlideContainer;
