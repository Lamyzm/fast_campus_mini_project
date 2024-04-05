import { useRouter } from "next/navigation";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function CartSuccessToast() {
  const router = useRouter();
  // const handleClick = () => {
  //   router.push("/cart");
  // };
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
