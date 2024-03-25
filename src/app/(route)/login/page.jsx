"use client";
import { Button } from "@/components/buttons/Button";
import axios from "axios";

export default function Home() {
  const postData = async () => {
    const test = {
      email: "test11@gmail.com",
      password: "test123123123",
    };
    try {
      const response = await axios.post(
        "http://183.96.51.234:8080/api/login",
        test,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      // console.log(response.data);
      console.log(response.headers);
      // console.log(response.status);
      // console.log(response.config);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const postData2 = async () => {
    const test = {};
    try {
      const response = await axios.get(
        "http://183.96.51.234:8080/api/authentication",
        {
          headers: {
            JWTTOKEN:
              "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ0ZXN0MTFAZ21haWwuY29tIiwiaWF0IjoxNzExMzU1NDY0LCJleHAiOjE3MTEzNTYwNjR9.BAXoWGTMhP2QbzhWJZy8G3FjULLhyaUkz5uO8-SGhRzHCGV4jkzlGbvzAV5bou7Z",
          },
        }
      );
      // console.log(response.data);
      console.log(response.headers);
      // console.log(response.status);
      // console.log(response.config);
      // console.log(response);
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
      <Button
        size="lg"
        type="rounded"
        color="white"
        outline="outlineBold"
        additionalClass="w-full"
        onClick={postData2}>
        검증2
      </Button>
    </>
  );
}
