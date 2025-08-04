import axiosInstance from "@/utils/axiosInstance";
export const profileAPIs = {
    updateProfilePicture: async (file) => {
        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await axiosInstance.patch("/admin/updateProfilePicture", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Profile picture update error:", error);
            throw new Error(
                error?.response?.data?.message || "Failed to update profile picture. Please try again."
            );
        }
    },
    getProfile: async () => {
        try {
            const response = await axiosInstance.get("/admin/getProfile");
            return response.data;
        } catch (error) {
            console.error("Profile picture get error:", error);
            throw new Error(
                error?.response?.data?.message || "Failed to get profile picture. Please try again."
            );
        }
    },
    changePassword: async (data) => {
        try {
            const response = await axiosInstance.patch("/admin/changePassword", data);
            return response.data;
        } catch (error) {
            console.error("Change password error:", error);
            throw new Error(
                error?.response?.data?.message || "Failed to change password. Please try again."
            );
        }
    },
};