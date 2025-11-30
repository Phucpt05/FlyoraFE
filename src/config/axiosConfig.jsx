import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false
});

axiosClient.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(
    response => {
        console.log('Response received:', response);
        return response;
    },
    error => {
        console.error('Axios error:', error);
        console.error('Error response:', error.response);
        console.error('Error config:', error.config);
        
        if (error.response?.status === 401 || error.response?.status === 403) {
            window.localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
export default axiosClient