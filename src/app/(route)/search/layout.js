"use client"
import SelectedRoomDetailLayout from '@/components/SelectedRoomDetailLayout';
import SelectNav from '@/components/selectNav/SelectNav';

export default function Layout({ children }) {
  return (
    <>
      <SelectNav />
      <SelectedRoomDetailLayout>
        {children}
      </SelectedRoomDetailLayout>
    </>

  );
}
