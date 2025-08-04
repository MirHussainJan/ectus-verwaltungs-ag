import { authManagementAPIs } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from '@tanstack/react-query';
import { useQueryWithErrorToast, useMutationWithToast, useMultiQueryWithErrorToast, useInfiniteQueryWithErrorToast } from "../utils/tanstackInstance";
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
// /** -------------------------------
//  * 👤 User Login
//  ---------------------------------- */
export const useUserLogin = (onSuccessCallback) => {
    return useMutationWithToast({
        mutationFn: (data) => authManagementAPIs.userLogin(data),
        successMsg: "Login successful!",
        errorMsg: "Failed to login",
        onSuccess: onSuccessCallback,
    });
};
// /** -------------------------------
//  * 👤 User Logout
//  ---------------------------------- */
export const useUserLogout = (onSuccessCallback) => {
    return useMutationWithToast({
        mutationFn: () => authManagementAPIs.userLogout(),
        successMsg: "Logout successful!",
        errorMsg: "Failed to logout",
        onSuccess: onSuccessCallback,
    });
};
// 🚀 User Auth Check Hook
export const useCheckUserAuthStatus = () => {
    return useQuery({
        queryKey: ["user-auth-status"],
        queryFn: authManagementAPIs.checkUserAuthStatus,
        refetchOnWindowFocus: false,
        retry: false,
    });
};

// 👨‍💼 Admin Auth Check Hook
export const useCheckAdminAuthStatus = () => {
    return useQuery({
        queryKey: ["admin-auth-status"],
        queryFn: authManagementAPIs.checkAdminAuthStatus,
        refetchOnWindowFocus: false,
        retry: false,
    });
};
