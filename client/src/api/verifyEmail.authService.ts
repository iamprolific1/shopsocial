import axiosInstance from "./axiosInstance";

export const verifyUserEmail = async (email: string, verificationCode: string) => {
    try {
        const response = await axiosInstance.post("/verify-email", {
            email: email,
            verificationToken: verificationCode,
        });

        return response.data;
    } catch (error) {
        console.error("Error verifying user email:", error);
        throw error;
    }
};
