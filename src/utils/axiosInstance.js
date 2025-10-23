import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.ectus-verwaltungs-ag.com/api",
    withCredentials: true, 
});

export default axiosInstance;