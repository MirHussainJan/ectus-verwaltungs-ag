import { klarnaAPIs } from "../../api/admin/klarna";
import {
    useQueryWithErrorToast,
    useMutationWithToast,
    useMultiQueryWithErrorToast,
    useInfiniteQueryWithErrorToast,
} from "../../utils/tanstackInstance";

/** -------------------------------
 * 📋 Klarna-Preis abrufen
 ---------------------------------- */
export const useGetKlarna = () =>
    useQueryWithErrorToast(
        {
            queryKey: ["klarna"],
            queryFn: () => klarnaAPIs.getKlarna(),
            keepPreviousData: true,
        },
        "Klarna-Preis konnte nicht abgerufen werden"
    );

/** -------------------------------
 * ✏️ Klarna-Preis aktualisieren
 ---------------------------------- */
export const useUpdateKlarna = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: klarnaAPIs.updateKlarna,
        successMsg: "Klarna erfolgreich aktualisiert!",
        errorMsg: "Klarna konnte nicht aktualisiert werden",
        onSuccess: onSuccessCallback,
    });
