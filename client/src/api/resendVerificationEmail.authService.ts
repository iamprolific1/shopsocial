import axiosInstance from "./axiosInstance";

export const resendVerficationEmail = async(email: string)=> {
    try {
        const response = await axiosInstance.post('/resend-verification-email', {
            email: email,
        })
        return response.data;
    } catch (error) {
        console.error("Error resending verification email ",error);
        throw error;
    }
}