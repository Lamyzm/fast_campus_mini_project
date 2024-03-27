"use client"
import MainNav from '@/components/mainNav/MainNav';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient()

export default function Layout({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainNav />
        {children}
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </>

  );
}
