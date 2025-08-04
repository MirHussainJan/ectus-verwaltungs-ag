import { klarnaAPIs } from "../../api/admin/klarna";
import { useQueryWithErrorToast, useMutationWithToast, useMultiQueryWithErrorToast, useInfiniteQueryWithErrorToast } from "../../utils/tanstackInstance";
/** -------------------------------
 * 📋 Get Klarna Price
 ---------------------------------- */
export const useGetKlarna = () =>
    useQueryWithErrorToast(
        {
            queryKey: ["klarna"],
            queryFn: () => klarnaAPIs.getKlarna(),
            keepPreviousData: true,
        },
        "Failed to fetch klarna"
    );
// /** -------------------------------
//  * ✏️ Update Klarna Price
//  ---------------------------------- */
export const useUpdateKlarna = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: klarnaAPIs.updateKlarna,
        successMsg: "Klarna updated successfully!",
        errorMsg: "Failed to update klarna",
        onSuccess: onSuccessCallback,
    });