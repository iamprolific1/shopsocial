import axios from 'axios';

// create an axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;