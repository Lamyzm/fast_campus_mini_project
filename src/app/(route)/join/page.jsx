"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/input";
import { Button } from "@/components/buttons/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const registerResponse = await axios.post(
        "http://183.96.51.234:8080/api/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(registerResponse.data);
      // console.log(registerResponse.headers);
      
    } catch (error) {
      console.error(error);
      setError("Failed to register. Please try again.");
    }
  };

  const clearError = () => {
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[370px] h-[600px] bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <form onSubmit={handleRegister}>
          <div className="space-y-10 mt-14 mb-12">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">
                이름
              </label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                additionalClass="w-full text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                이메일
              </label>
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                additionalClass="w-full text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                additionalClass="w-full text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-700 mb-2">
                비밀번호 확인
              </label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  clearError();
                }}
                required
                additionalClass="w-full text-sm"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6">
            <Button
              size="lg"
              type="rounded"
              color="primary"
              additionalClass="w-full"
              onClick={handleRegister}>
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
