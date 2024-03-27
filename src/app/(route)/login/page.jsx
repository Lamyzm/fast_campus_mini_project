"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/input";
import { Button } from "@/components/buttons/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log(res);
    if (res.status === 200) {
      router.push("/");
    }
    if (res.status === 401) {
      setError("이메일이나 비밀번호가 잘못되었습니다");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[370px] h-[400px] bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div>
          <h2 className="mt-12 text-center text-2xl font-extrabold text-gray-900 mb-6">
            3조 화이팅
          </h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="space-y-6 mt-14 mb-12">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              required
              additionalClass="w-full"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              additionalClass="w-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6">
            <Button
              size="lg"
              type="rounded"
              color="primary"
              additionalClass="w-full"
              onSubmit={true}>
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
