import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://www.sk-blackrock-financial.com/api",
    withCredentials: true,
});

export default axiosInstance;