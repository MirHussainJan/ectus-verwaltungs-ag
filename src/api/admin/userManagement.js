import axiosInstance from "@/utils/axiosInstance";

export const userManagementAPIs = {
    getUsersList: async ({ page = 1, pageSize = 10, searchTerm }) => {
        try {

            const response = await axiosInstance.get("/admin/searchUsers", {
                params: {
                    page,
                    pageSize,
                    searchTerm,
                },
            });
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.errors || "Failed to get users. Please try again.");
        }

    },
    addNewUser: async (data) => {
        try {
            const response = await axiosInstance.post("/admin/createUser", data);
            return response.data;
        } catch (error) {
            console.log("error", error);
            throw new Error(error?.response?.data?.errors || "Failed to create user. Please try again.");
        }
    },
};
