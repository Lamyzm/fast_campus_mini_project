import axios from "axios";
import { getSession } from "next-auth/react";

const authApi = axios.create({
  baseURL: "https://fcbe-mini-project.kro.kr:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

authApi.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    console.log(session);

    if (session?.user?.token) {
      config.headers["JWTTOKEN"] = session?.user?.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authApi;
