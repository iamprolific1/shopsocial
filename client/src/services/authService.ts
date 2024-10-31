import axiosInstance from "../api/axiosInstance";
import Cookies from "js-cookie";

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: object;
    message?: string;
}


export const logUserIn = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    const response = await axiosInstance.post("/login", { email, password });
    return response.data;
};

interface RefreshTokenResponse {
  accessToken: string | null;
  userData: object | null;
}

export const refreshAccessToken = async (): Promise<RefreshTokenResponse> => {
    try {
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken) return { accessToken: null, userData: null };

        const response = await axiosInstance.post("/refresh-token", {
        refreshToken,
        });

        const { accessToken, userData } = response.data;
        if (accessToken) {
        Cookies.set("accessToken", accessToken, {
            secure: true,
            sameSite: "strict",
        });
        return {accessToken, userData};
        }
        return { accessToken: null, userData: null };
    } catch (error) {
        console.error("Error refreshing access token:", error);
        return { accessToken: null, userData: null };
    }
};

export const checkAuthStatus = async (): Promise<{ user: object }> => {
    const response = await axiosInstance.get("/auth-status");
    return response.data;
};
