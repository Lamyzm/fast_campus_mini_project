import axios from "axios";
import { getSession } from "next-auth/react";

const authApi = axios.create({
  baseURL: "http://3.35.216.158:8080/api",
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
