import { profileAPIs } from "../../api/admin/profile";
import { useMutationWithToast } from "../../utils/tanstackInstance";

/** -------------------------------
 * 🖼️ Update Profile Picture
 ---------------------------------- */
export const useUpdateProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.updateProfilePicture,
        successMsg: "Profile picture updated successfully!",
        errorMsg: "Failed to update profile picture",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🖼️ Get Profile Picture
 ---------------------------------- */
export const useGetProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.getProfile,
        successMsg: "Profile picture fetched successfully!",
        errorMsg: "Failed to fetch profile picture",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🔑 Change Password
 ---------------------------------- */
export const useChangePassword = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.changePassword,
        successMsg: "Password changed successfully!",
        errorMsg: "Failed to change password",
        onSuccess: onSuccessCallback,
    });
