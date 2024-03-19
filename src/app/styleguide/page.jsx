"use client";
import { MainContainer } from "@/components/MainContainer";
import Buttons from "@/components/button/Buttons";
import IconsList from "@/components/icons";
import MainSlideContainer from "@/components/mainSlide/MainSlideContainer";


export default function styleguide() {
  return (
    <>
      <MainContainer>
        <Buttons></Buttons>
        <div>
          {/* size option : small, large
          color option : primary, secondary (상황에 맞게 색상 수정) */}
          <h1> 아이콘 </h1>
          <IconsList />
        </div>
        <MainSlideContainer />
      </MainContainer>
    </>
  );
}
