import { profileAPIs } from "../../api/admin/profile";
import { useMutationWithToast } from "../../utils/tanstackInstance";

/** -------------------------------
 * 🖼️ Profilbild aktualisieren
 ---------------------------------- */
export const useUpdateProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.updateProfilePicture,
        successMsg: "Profilbild erfolgreich aktualisiert!",
        errorMsg: "Profilbild konnte nicht aktualisiert werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🖼️ Profilbild abrufen
 ---------------------------------- */
export const useGetProfilePicture = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.getProfile,
        successMsg: "Profilbild erfolgreich abgerufen!",
        errorMsg: "Profilbild konnte nicht abgerufen werden",
        onSuccess: onSuccessCallback,
    });

/** -------------------------------
 * 🔑 Passwort ändern
 ---------------------------------- */
export const useChangePassword = (onSuccessCallback) =>
    useMutationWithToast({
        mutationFn: profileAPIs.changePassword,
        successMsg: "Passwort erfolgreich geändert!",
        errorMsg: "Passwort konnte nicht geändert werden",
        onSuccess: onSuccessCallback,
    });
