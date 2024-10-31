import axios from "axios";
import Cookies from "js-cookie";
import { refreshAccessToken } from "../services/authService";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {

    if (config.url !== "/refresh-token") {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.message ===
        "Access token expired, please refresh" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        if(newAccessToken) {
          Cookies.set('accessToken', newAccessToken, {secure: true, sameSite: 'strict'});
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (error) {
        console.error('failed to refresh token: ', error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
