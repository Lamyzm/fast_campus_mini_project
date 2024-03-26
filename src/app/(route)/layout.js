"use client"
import MainNav from '@/components/mainNav/MainNav';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function Layout({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>

  );
}
