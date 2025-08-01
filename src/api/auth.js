import axiosInstance from "../utils/axiosInstance";
export const authManagementAPIs = {
    adminLogin: async (data) => {
        try {
            const response = await axiosInstance.post("/admin/login", data);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to login. Please try again.");
        }
    },
    adminLogout: async () => {
        try {
            const response = await axiosInstance.post("/admin/logout");
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.message || "Failed to logout. Please try again.");
        }
    },
};