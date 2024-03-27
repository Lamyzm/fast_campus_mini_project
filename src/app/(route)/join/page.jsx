'use client'
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/input";
import { Button } from "@/components/buttons/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const validatePassword = (password) => {
  const regex = /^[a-zA-Z\d@$!%*#?&]{8,12}$/;
  return regex.test(password);
};

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isEmailAvailable, setIsEmailAvailable] = useState(undefined);
  const [error, setError] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://3.35.216.158:8080/api/validate", {
        email: formData.email,
      }, {
        timeout: 10000,
      });

      if (response.status === 200) {
        setIsEmailAvailable(true);
        setError("");
        setAvailabilityMessage("가입 가능한 이메일입니다.");
      } else if (response.status === 400) {
        setIsEmailAvailable(false);
        setError("이미 존재하는 이메일입니다.");
        setAvailabilityMessage("");
      } else {
        setIsEmailAvailable(undefined);
        setError("Unknown response from server");
        setAvailabilityMessage("");
      }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.message === "이미 존재하는 이메일 입니다") {
        setIsEmailAvailable(false);
        setError("이미 존재하는 이메일입니다.");
        setAvailabilityMessage("");
      } else {
        setError("Failed to check email availability. Please try again.");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (isEmailAvailable !== true) {
      setError("이메일 중복 확인을 먼저 해주세요.");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError("비밀번호는 최소 8자에서 최대 12자까지 가능합니다.");
      return;
    }

    try {
      const response = await axios.post("http://3.35.216.158:8080/api/register", formData);

      if (response.status === 200) {
        const res = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (res.status === 200) {
          router.push("/");
        } else if (res.status === 401) {
          setError("이메일이나 비밀번호가 잘못되었습니다");
        } else {
          setError("로그인에 실패했습니다");
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to register. Please try again.");
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if (formData.password !== value) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
    }
    setFormData({
      ...formData,
      confirmPassword: value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[370px] min-h-[600px] bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <form onSubmit={handleRegister}>
          <div className="space-y-10 mt-14 mb-12">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">
                이름
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                additionalClass="w-full text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                이메일
              </label>
              <div className="flex">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setAvailabilityMessage("")}
                  required
                  additionalClass="w-[210px] text-sm"
                />
                <Button
                  type="button"
                  size="sm"
                  color="primary"
                  additionalClass="mt-2 ml-2"
                  onClick={handleCheckEmail}
                >
                  중복 확인
                </Button>
              </div>
              {availabilityMessage && <p className="text-green-500 text-sm">{availabilityMessage}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
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
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handlePasswordChange}
                required
                additionalClass="w-full text-sm"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="mt-6">
            <Button
              type="submit"
              size="lg"
              color="primary"
              additionalClass="w-full"
              onSubmit={true}
            >
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
