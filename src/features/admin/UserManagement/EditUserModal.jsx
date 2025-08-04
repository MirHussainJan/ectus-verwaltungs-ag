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

const EditUserModal = ({ opened, onClose, currentUser: id  }) => {
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
      email: "",
      password: "",
    },
    validate: {
      firstName: (v) => (v.trim().length ? null : "First name is required"),
      lastName: (v) => (v.trim().length ? null : "Last name is required"),
      dob: (v) => {
        if (!v) return "Date of birth is required";
        const today = new Date();
        if (v > today) return "DOB cannot be in the future";
        return null;
      },
      gender: (v) => (v ? null : "Select gender"),
      country: (v) => (v ? null : "Select country"),
      shares: (v) => {
        const n = Number(v);
        if (!Number.isFinite(n) || n < 0)
          return "Enter a valid non‑negative number";
        return null;
      },
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  useEffect(() => {
    if (data?.user) {
      const { firstName, lastName, dob, gender, country, shares, email } =
        data?.user;
      form.setValues({
        firstName,
        lastName,
        dob: new Date(dob),
        gender,
        country,
        shares,
        email,
        password: "", 
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
      <Modal opened={opened} onClose={onClose} title="Edit User" centered>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="p-4 gap-4 grid md:grid-cols-2"
        >
          <TextInput
            label="First Name"
            withAsterisk
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            withAsterisk
            {...form.getInputProps("lastName")}
          />
          <DateInput
            label="Date of Birth"
            withAsterisk
            placeholder="MM-DD-YYYY"
            valueFormat="MM-DD-YYYY"
            maxDate={new Date()}
            {...form.getInputProps("dob")}
          />
          <Select
            label="Gender"
            placeholder="Select Gender"
            withAsterisk
            data={["Male", "Female", "Other"]}
            searchable
            {...form.getInputProps("gender")}
          />
          <Select
            label="Country"
            placeholder="Select Country"
            withAsterisk
            data={COUNTRIES}
            searchable
            {...form.getInputProps("country")}
          />
          <NumberInput
            label="Klarna Shares"
            hideControls
            min={0}
            {...form.getInputProps("shares")}
          />
          <TextInput
            label="Email"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="(Leave empty to keep unchanged)"
            {...form.getInputProps("password")}
          />

          <Button
            unstyled
            type="submit"
            className="h-[50px] bg-black hover:bg-black/90 text-white cursor-pointer"
          >
            Save Changes
          </Button>
          <Button
            unstyled
            type="button"
            variant="outline"
            className="h-[50px] bg-transparent text-[#111827] border border-[#E7E7E7]"
            onClick={onClose}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default EditUserModal;
