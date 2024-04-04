import { Inter } from "next/font/google";
import { GlobalLayout } from '../components/GlobalLayout';
import "./globals.css";
import "./reset.css"
import AuthProvider from "@/context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "팀쓰리",
  description: "숙소 앱",
};


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthProvider>
          <GlobalLayout>
            {children}
          </GlobalLayout>
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}


