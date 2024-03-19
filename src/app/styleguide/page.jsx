'use client'
import { MainContainer } from '@/components/MainContainer';
import * as Icons from '@/components/icons';
import Icon2 from '@/components/icons2';

export default function styleguide() {
  return (
    <>
      <MainContainer>
        {/* 하드코딩으로 그냥 아이콘 쓸 때 */}
        <div>
          <h1> 아이콘 </h1>
          <Icons.ArrowBackIcon />
          <Icons.LogoutIcon />
          <Icons.ShoppingCartIcon />
          <Icons.LoginIcon />
          <Icons.SearchIcon />
          <Icons.ArrowForwardIosIcon />
          <Icons.AddIcon />
          <Icons.HomeIcon />
          <Icons.PermIdentityOutlinedIcon />
          <Icons.LocationOnIcon />
          <Icons.AccessTimeIcon />
          <Icons.CheckIcon />
          <Icons.HelpOutlineIcon />
          <Icons.CloseIcon />
          <Icons.ExpandMoreIcon />
          <Icons.ScheduleIcon />
        </div>
        {/* 어떤 아이콘 쓸건지, size, color 동기적으로 받을때  */}
        <Icon2 type="AddIcon" size="large" color="primary" />
      </MainContainer>
    </>
  );
}
