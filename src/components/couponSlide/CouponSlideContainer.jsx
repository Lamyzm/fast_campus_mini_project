"use client";
import React from "react";
import CouponSlide from "./CouponSlide";

const CouponSlideContainer = () => {
  return (
    <section className="my-4 relative w-full main-section-padding box-border">
      <div>
        <div className="flex items-center justify-between ">
          <h1 className="flex justify-start font-bold text-lg mb-3">이벤트</h1>
        </div>
      </div>
      <CouponSlide /> 
    </section>
  );
};

export default CouponSlideContainer;
