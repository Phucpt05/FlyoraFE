import axios from "axios";
import {useAuth} from "../context/index.jsx";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosClient.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('accessToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return error.response.data;
});
axiosClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            const { logout } = useAuth();
            logout();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
export default axiosClient