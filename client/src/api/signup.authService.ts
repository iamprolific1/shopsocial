import axiosInstance from './axiosInstance';

interface SignupData {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    accountType: string;
    password: string;
}

export const signupUser = async (data: SignupData) => {
    try {
        const response = await axiosInstance.post('/signup', data);
        return response.data;
    } catch (error) {
        console.error("Error signing up user: ", error);
        throw error;
    }
}