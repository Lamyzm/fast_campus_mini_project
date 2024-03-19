"use client";
import { MainContainer } from "@/components/MainContainer";
import Icons from "@/components/icons";
import Buttons from "@/components/button/Buttons";

export default function styleguide() {
  return (
    <>
      <MainContainer>
        <Buttons></Buttons>
        <div>
          {/* size option : small, large
          color option : primary, secondary (상황에 맞게 색상 수정) */}
          <h1> 아이콘 </h1>
          <Icons type="ArrowBackIcon" size="large" color="primary" />
          <Icons type="LogoutIcon" size="large" color="primary" />
          <Icons type="LoginIcon" size="large" color="primary" />
          <Icons type="SearchIcon" size="large" color="primary" />
          <Icons type="ArrowForwardIosIcon" size="large" color="primary" />
          <Icons type="AddIcon" size="large" color="primary" />
          <Icons type="PermIdentityOutlinedIcon" size="large" color="primary" />
          <Icons type="AccessTimeIcon" size="large" color="primary" />
          <Icons type="CheckIcon" size="large" color="primary" />
          <Icons type="HelpOutlineIcon" size="large" color="primary" />
          <Icons type="CloseIcon" size="large" color="primary" />
          <Icons type="ExpandMoreIcon" size="large" color="primary" />
          <Icons type="ScheduleIcon" size="large" color="primary" />
          <Icons type="ShoppingCartOutlinedIcon" size="large" color="primary" />
          <Icons type="HomeOutlinedIcon" size="large" color="primary" />
          <Icons type="LocationOnOutlinedIcon" size="large" color="primary" />
        </div>
      </MainContainer>
    </>
  );
}
