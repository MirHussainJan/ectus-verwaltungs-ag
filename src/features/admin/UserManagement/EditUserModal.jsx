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

const AddNewUserModal = ({ opened, onClose, onSubmit }) => {
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
      password: (v) =>
        v.length >= 8 ? null : "Password must be at least 8 characters",
    },
  });

  const handleSubmit = (values) => {
    if (onSubmit) onSubmit(values);
    else console.log("Add user:", values);
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Edit User Details" centered>
      <form
        onSubmit={form.onSubmit(handleSubmit)}
        className="p-4 gap-4 grid md:grid-cols-2"
      >
        <TextInput
          label="First Name"
          placeholder="Enter First Name"
          withAsterisk
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Enter Last Name"
          withAsterisk
          {...form.getInputProps("lastName")}
        />
        <DateInput
          label="Date of Birth"
          placeholder="MM-DD-YYYY"
          withAsterisk
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
          nothingFoundMessage="No options"
          {...form.getInputProps("gender")}
        />
        <Select
          label="Country"
          placeholder="Select Country"
          withAsterisk
          data={COUNTRIES}
          searchable
          nothingFoundMessage="No results"
          {...form.getInputProps("country")}
        />
        <NumberInput
          label="Klarna Shares"
          placeholder="Enter Klarna shares"
          hideControls
          min={0}
          {...form.getInputProps("shares")}
        />
        <TextInput
          label="Email"
          placeholder="Enter User Email"
          withAsterisk
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="Password"
          placeholder="Create New Password"
          withAsterisk
          {...form.getInputProps("password")}
        />
        <Button
          unstyled
          type="submit"
          className="h-[50px] bg-black hover:bg-black/90 text-white"
        >
          Save
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
  );
};

export default AddNewUserModal;
