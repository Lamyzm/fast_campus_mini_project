"use client";
import React from "react";
import CouponSlide from "./CouponSlide";

const CouponSlideContainer = () => {
  return (
    <section className="relative main-section-padding box-border m-auto">
      <div>
        <div className="flex items-center justify-between ">
          <h1 style={{ fontWeight: "600", fontSize: "20px" }}>이벤트</h1>
        </div>
      </div>
      <CouponSlide />
    </section>
  );
};

export default CouponSlideContainer;
