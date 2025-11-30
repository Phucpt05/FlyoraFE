import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL
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
    response => response,
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            window.localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
export default axiosClient