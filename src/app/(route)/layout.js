"use client"
import MainNav from '@/components/mainNav/MainNav';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { SearchProvider } from '@/context/SearchContext';
import Toasts from '@/components/Toast/Toasts';
import { usePathname } from 'next/navigation';
import SelectNav from '@/components/selectNav/SelectNav';

const queryClient = new QueryClient()

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
        {pathName.includes("/search") ? <SelectNav /> : <MainNav />}
          <Toasts />
          {children}
        </SearchProvider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>

  );
}
