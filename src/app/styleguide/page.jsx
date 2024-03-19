"use client";
import Image from "next/image";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <>
      <Button
        size="icon"
        color="primary"
        className="bg-blue-500"
        onClick={() => {
          console.log("onclick");
        }}>
        asasdasdss
      </Button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </>
  );
}
