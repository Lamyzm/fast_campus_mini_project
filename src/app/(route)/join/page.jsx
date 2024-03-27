"use client";
import axios from "axios";
import { Button } from "@/components/buttons/Button";

export default function Home() {
  const postData = async () => {
    const test = {
      email: "test11@gmail.com",
      password: "test123123123",
      name: "admin",
    };
    try {
      const response = await axios.post(
        "http://183.96.51.234:8080/api/register",
        test
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Button
        size="lg"
        type="rounded"
        color="white"
        outline="outlineBold"
        additionalClass="w-full"
        onClick={postData}>
        로그인
      </Button>
    </>
  );
}
