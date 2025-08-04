import { userManagementAPIs } from "../../api/admin/userManagement";
import { useQueryWithErrorToast, useMutationWithToast, useMultiQueryWithErrorToast, useInfiniteQueryWithErrorToast } from "../../utils/tanstackInstance";

/** -------------------------------
 * 📋 Get Users List
 ---------------------------------- */
export const useGetUsersList = (filters) =>
    useQueryWithErrorToast(
        {
            queryKey: ["usersList", filters],
            queryFn: () => userManagementAPIs.getUsersList(filters),
            keepPreviousData: true,
        },
        "Failed to fetch user list"
    );
// /** -------------------------------
//  * ➕ Add User
//  ---------------------------------- */
export const useAddNewUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.addNewUser,
        successMsg: "User added successfully!",
        errorMsg: "Could not add user",
        onSuccess: onSuccessCallback,
    });
// /** -------------------------------
//  * 🚫 Delete User
//  ---------------------------------- */
export const useDeleteUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.deleteUser,
        successMsg: "User deleted successfully!",
        errorMsg: "Failed to delete user",
        onSuccess: onSuccessCallback,
    });
/** -------------------------------
 * 📋 Get User
 ---------------------------------- */
export const useGetUser = (id) =>
    useQueryWithErrorToast(
        {
            queryKey: ["user", id],
            queryFn: () => userManagementAPIs.getUser(id),
            keepPreviousData: true,
        },
        "Failed to fetch user"
    );
// /** -------------------------------
//  * ✏️ Update User
//  ---------------------------------- */
export const useUpdateUser = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.updateUser,
        successMsg: "User updated successfully!",
        errorMsg: "Failed to update user",
        onSuccess: onSuccessCallback,
    });
// /** -------------------------------
//  * 🗑️ Reveal User Password
//  ---------------------------------- */
export const useRevealPassword = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: userManagementAPIs.revealPassword,
        successMsg: "Password revealed successfully!",
        errorMsg: "Failed to reveal password",
        onSuccess: onSuccessCallback,
    });