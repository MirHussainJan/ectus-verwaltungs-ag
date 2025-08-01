import axiosInstance from "@/utils/axiosInstance";

export const userManagementAPIs = {
    getUsersList: async ({ page = 1, pageSize = 10, searchTerm }) => {
        const response = await axiosInstance.get("/admin/searchUsers", {
            params: {
                page,
                pageSize,
                searchTerm,
            },
        });
        return response.data;
    },
};
