import { authManagementAPIs } from "../api/auth";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useQueryWithErrorToast, useMutationWithToast, useMultiQueryWithErrorToast, useInfiniteQueryWithErrorToast } from "../utils/tanstackInstance";
// /** -------------------------------
//  * ➕ Add User
//  ---------------------------------- */
// export const useAddNewUser = (onSuccessCallback) =>
//     useMutationWithToast({
//         mutationFn: userManagementAPIs.addNewUser,
//         successMsg: "User added successfully!",
//         errorMsg: "Could not add user",
//         onSuccess: onSuccessCallback,
//     });

// /** -------------------------------
//  * 📋 Get Users List
//  ---------------------------------- */
// export const useGetUsersList = (filters) =>
//     useQueryWithErrorToast(
//         {
//             queryKey: ["usersList", filters],
//             queryFn: () => userManagementAPIs.getUsersList(filters),
//             keepPreviousData: true,
//         },
//         "Failed to fetch user list"
//     );

// /** -------------------------------
//  * 👤 Get User Details
//  ---------------------------------- */
// export const useGetUserDetails = (userId, activeTab, reportPagination) => {
//     const results = useMultiQueryWithErrorToast(
//         [
//             {
//                 queryKey: ["userDetails", userId],
//                 queryFn: () => userManagementAPIs.getUserDetails(userId),
//                 enabled: !!userId,
//             },
//             // {
//             //     queryKey: ["userReports", userId, reportPagination],
//             //     queryFn: () => userManagementAPIs.getUserReports(userId, reportPagination),
//             //     enabled: !!userId && activeTab === "reports",
//             //     keepPreviousData: true,
//             // },
//         ],
//         ["user details"]
//     );

//     return {
//         userDetails: { ...results[0] },
//         // userReports: { ...results[1] }
//     };
// };

// export const useInfiniteUserPosts = (userId, activeTab) => {
//     return useInfiniteQueryWithErrorToast(
//         {
//             queryKey: ['userPosts', userId],
//             queryFn: ({ pageParam = 1 }) => userManagementAPIs.getUserPosts(userId, pageParam),
//             getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
//             enabled: !!userId && activeTab,
//         },
//         "Failed to fetch user posts"
//     );
// };
// export const useInfiniteUserReports = (userId, activeTab) => {
//     return useInfiniteQueryWithErrorToast(
//         {
//             queryKey: ['userReports', userId],
//             queryFn: ({ pageParam = 1 }) => userManagementAPIs.getUserReports(userId, pageParam),
//             getNextPageParam: (lastPage) => lastPage?.nextPage ?? undefined,
//             enabled: !!userId && activeTab,
//         },
//         "Failed to fetch user reports"
//     );
// };
// /** -------------------------------
//  * ✏️ Update User
//  ---------------------------------- */
// export const useUpdateUser = (onSuccessCallback) =>
//     useMutationWithToast({
//         mutationFn: ({ userId, updatedData }) =>
//             userManagementAPIs.updateUser({ userId, updatedData }),
//         successMsg: "User updated successfully!",
//         errorMsg: "Failed to update user",
//         onSuccess: onSuccessCallback,
//     });

// /** -------------------------------
//  * 🚫 Change User Status (Disable/Delete)
//  ---------------------------------- */
// export const useChangeUserStatus = (onSuccessCallback) => {
//     const mutation = useMutationWithToast({
//         mutationFn: ({ userIds, status }) =>
//             userManagementAPIs.changeUserStatus({ userIds, status }),
//         successMsg: "User status updated successfully!",
//         errorMsg: "Failed to update user status",
//         onSuccess: onSuccessCallback,
//     });

//     return mutation;
// };
// /** -------------------------------
//  * 🚫 Hook to Disable User Post
//  ---------------------------------- */
// export const useDisableUserPost = (onSuccessCallback) => {
//     return useMutationWithToast({
//         mutationFn: (postId) => userManagementAPIs.disableUserPost(postId),
//         successMsg: "Post disabled successfully!",
//         errorMsg: "Failed to disable post",
//         onSuccess: onSuccessCallback,
//     });
// };
// /** -------------------------------
//  * 🗑️ Hook to Delete User Post
//  ---------------------------------- */
// export const useDeleteUserPost = (onSuccessCallback) => {
//     return useMutationWithToast({
//         mutationFn: (postId) => userManagementAPIs.deleteUserPost(postId),
//         successMsg: "Post deleted successfully!",
//         errorMsg: "Failed to delete post",
//         onSuccess: onSuccessCallback,
//     });
// };
// /** -------------------------------
//  * 👤 Admin Login
//  ---------------------------------- */
export const useAdminLogin = (onSuccessCallback) => {
    return useMutationWithToast({
        mutationFn: (data) => authManagementAPIs.adminLogin(data),
        successMsg: "Login successful!",
        errorMsg: "Failed to login",
        onSuccess: onSuccessCallback,
    });
};
// /** -------------------------------
//  * 👤 Admin Logout
//  ---------------------------------- */
export const useAdminLogout = (onSuccessCallback) => {
    return useMutationWithToast({
        mutationFn: () => authManagementAPIs.adminLogout(),
        successMsg: "Logout successful!",
        errorMsg: "Failed to logout",
        onSuccess: onSuccessCallback,
    });
};