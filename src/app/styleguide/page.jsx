"use client";
import { MainContainer } from "@/components/MainContainer";
import Buttons from "@/components/button/Buttons";
import IconsList from "@/components/icons";
import MainSlideContainer from "@/components/mainSlide/MainSlideContainer";
import { Input } from "@/components/input";


export default function styleguide() {
  return (
    <>
      <MainContainer>
        <Buttons></Buttons>
        <div className="m-10">
          <h1> 인풋 </h1>
          <Input id="username" size="default" width="sm" placeholder="Enter your username" />
          <Input id="password" size="default" type="password" placeholder="Enter your password" />
        </div>
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
