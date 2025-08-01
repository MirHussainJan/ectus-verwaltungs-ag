import axiosInstance from "@/utils/axiosInstance";

export const userManagementAPIs = {
    getUsersList: async ({ page = 1, pageSize = 10 }) => {
        const response = await axiosInstance.get("/admin/getUsers", {
            params: {
                page,
                pageSize,
            },
        });
        return response.data;
    },
};
