import axiosInstance from './axiosInstance';


export const logUserIn = async(email: string, password: string)=> {
    try {
        const response = await axiosInstance.post('/login', {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        console.error("Error logging in user: ", error);
        throw error || "Login failed";
    }
}