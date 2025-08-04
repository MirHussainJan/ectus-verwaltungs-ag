import { userProfileAPIs } from "@/api/user/profile";
import { useQueryWithErrorToast, useMutationWithToast } from "@/utils/tanstackInstance";

/** -------------------------------
 * 📋 Get User Profile
 ---------------------------------- */
export const useGetUserProfile = (onSuccessCallback) =>
    useQueryWithErrorToast(
        {
            queryKey: ["userProfile"],
            queryFn: () => userProfileAPIs.getProfile(),
        },
        "Failed to fetch user profile",
        onSuccessCallback
    );

/** -------------------------------
 * 🖼️ Update User Profile Picture
 ---------------------------------- */
export const useUpdateUserProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userProfileAPIs.updateProfilePicture,
        successMsg: "Profile picture updated successfully!",
        errorMsg: "Failed to update profile picture",
        onSuccess: onSuccessCallback,
    });
