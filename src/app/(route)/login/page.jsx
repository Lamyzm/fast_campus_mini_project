"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/input";
import { Button } from "@/components/buttons/Button";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 로그인
      const loginResponse = await axios.post(
        "http://3.35.216.158:8080/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(loginResponse.data);
      console.log(loginResponse.headers);

      const accessToken = loginResponse.data.token;

      // 토큰검증
      const verificationResponse = await axios.get(
        "http://3.35.216.158:8080/api/authentication",
        {
          headers: {
            JWTTOKEN: accessToken,
          },
        }
      );
      console.log(verificationResponse.data);
      console.log(verificationResponse.headers);

      // If both login and verification are successful, you can redirect the user to another page or perform other actions
    } catch (error) {
      console.error(error);
      setError("Invalid email or password");
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
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              additionalClass="w-full"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              additionalClass="w-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6">
            <Button
              size="lg"
              type="rounded"
              color="black"
              additionalClass="w-full"
              onClick={handleLogin}>
              로그인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
