"use client";

import React, { useEffect } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import LoadingBackdrop from "@/features/common/LoadingBackdrop";
import { useGetUser, useUpdateUser } from "@/hooks/admin/userManagement";
import COUNTRIES from "./CountryList";

const EditUserModal = ({ opened, onClose, currentUser: id }) => {
  const queryClient = useQueryClient();

  const { data, isPending } = useGetUser(id);
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser(() => {
    queryClient.invalidateQueries(["usersList"]);
    onClose();
  });

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
    },
  });

  useEffect(() => {
    if (data?.user) {
      const {
        firstName,
        lastName,
        dob,
        gender,
        country,
        shares,
        klarnaPurchasePrice,
        email,
      } = data?.user;

      form.setValues({
        firstName,
        lastName,
        dob: new Date(dob),
        gender,
        country,
        shares,
        klarnaPurchasePrice,
        email,
        password: "", // leer lassen
      });
    }
  }, [data]);

  const handleSubmit = (values) => {
    const { email, password, ...rest } = values;
    updateUser({
      userId: id,
      dob: rest.dob.toISOString(),
      ...rest,
    });
  };

  return (
    <>
      {(isPending || isUpdating) && <LoadingBackdrop />}
      <Modal
        opened={opened}
        onClose={onClose}
        title="Benutzer bearbeiten"
        centered
      >
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="p-4 gap-4 grid md:grid-cols-2"
        >
          <TextInput
            label="Vorname"
            withAsterisk
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Nachname"
            withAsterisk
            {...form.getInputProps("lastName")}
          />
          <DateInput
            label="Geburtsdatum"
            withAsterisk
            placeholder="MM-TT-JJJJ"
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
            {...form.getInputProps("gender")}
          />
          <Select
            label="Land"
            placeholder="Land auswählen"
            withAsterisk
            data={COUNTRIES}
            searchable
            {...form.getInputProps("country")}
          />
          <NumberInput
            label="Klarna-Aktien"
            hideControls
            min={0}
            {...form.getInputProps("shares")}
          />
          <NumberInput
            label="Kaufpreis Klarna"
            hideControls
            min={0}
            {...form.getInputProps("klarnaPurchasePrice")}
          />
          <br />
          <TextInput
            label="E-Mail"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Passwort"
            placeholder="(Leer lassen, um es nicht zu ändern)"
            {...form.getInputProps("password")}
          />

          <Button
            unstyled
            type="submit"
            className="h-[50px] bg-black hover:bg-black/90 text-white cursor-pointer"
          >
            Änderungen speichern
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

export default EditUserModal;
