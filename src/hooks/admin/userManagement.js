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