"use client";

import React from "react";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  NumberInput,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import COUNTRIES from "./CountryList";
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useAddNewUser } from "@/hooks/admin/userManagement";

const AddNewUserModal = ({ opened, onClose }) => {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: null,
      gender: "",
      country: "",
      shares: "",
      klarnaPurchasePrice: "",
      email: "",
      password: "",
    },
    validate: {
      firstName: (v) => (v.trim().length ? null : "Vorname ist erforderlich"),
      lastName: (v) => (v.trim().length ? null : "Nachname ist erforderlich"),
      dob: (v) => {
        if (!v) return "Geburtsdatum ist erforderlich";
        const today = new Date();
        if (v > today) return "Geburtsdatum darf nicht in der Zukunft liegen";
        return null;
      },
      gender: (v) => (v ? null : "Geschlecht auswählen"),
      country: (v) => (v ? null : "Land auswählen"),
      shares: (v) => {
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie eine gültige, nicht-negative Zahl ein";
        return null;
      },
      klarnaPurchasePrice: (v) => {
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Geben Sie einen gültigen Kaufpreis ein";
        return null;
      },
      email: (v) =>
        /^\S+@\S+\.\S+$/.test(v) ? null : "Ungültige E-Mail-Adresse",
      password: (v) =>
        v.length >= 8 ? null : "Passwort muss mindestens 8 Zeichen lang sein",
    },
  });

  const queryClient = useQueryClient();

  const { mutate, isPending } = useAddNewUser(() => {
    onClose();
    form.reset();
    queryClient.invalidateQueries(["usersList"]);
  });

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <>
      {isPending && <LoadingBackdrop />}
      <Modal
        opened={opened}
        onClose={onClose}
        title="Neuen Benutzer hinzufügen"
        centered
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="p-4 gap-4 grid md:grid-cols-2"
        >
          <TextInput
            label="Vorname"
            placeholder="Vorname eingeben"
            withAsterisk
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Nachname"
            placeholder="Nachname eingeben"
            withAsterisk
            {...form.getInputProps("lastName")}
          />
          <DateInput
            label="Geburtsdatum"
            placeholder="MM-TT-JJJJ"
            withAsterisk
            valueFormat="MM-DD-YYYY"
            maxDate={new Date()}
            {...form.getInputProps("dob")}
          />
          <Select
            label="Geschlecht"
            placeholder="Geschlecht auswählen"
            withAsterisk
            data={["Männlich", "Weiblich", "Divers"]}
            searchable
            nothingFoundMessage="Keine Optionen gefunden"
            {...form.getInputProps("gender")}
          />
          <Select
            label="Land"
            placeholder="Land auswählen"
            withAsterisk
            data={COUNTRIES}
            searchable
            nothingFoundMessage="Keine Ergebnisse"
            {...form.getInputProps("country")}
          />
          <NumberInput
            label="Klarna-Aktien"
            placeholder="Anzahl der Aktien eingeben"
            hideControls
            min={0}
            {...form.getInputProps("shares")}
          />
          <NumberInput
            label="Kaufpreis Klarna"
            placeholder="Kaufpreis eingeben"
            hideControls
            min={0}
            {...form.getInputProps("klarnaPurchasePrice")}
          />
          <br />
          <TextInput
            label="E-Mail"
            placeholder="Benutzer-E-Mail eingeben"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Passwort"
            placeholder="Neues Passwort erstellen"
            withAsterisk
            {...form.getInputProps("password")}
          />
          <Button
            unstyled
            type="submit"
            className="h-[50px] bg-black hover:bg-black/90 text-white cursor-pointer"
          >
            Speichern
          </Button>
          <Button
            unstyled
            type="button"
            variant="outline"
            className="h-[50px] bg-transparent text-[#111827] border border-[#E7E7E7]"
            onClick={onClose}
          >
            Abbrechen
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AddNewUserModal;
