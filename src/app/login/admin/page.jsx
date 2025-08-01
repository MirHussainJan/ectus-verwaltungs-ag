"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../../assets/icons/logo";
import background from "../../../assets/images/bg-sk-admin.jpg";
import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : "Please enter a valid email",
      password: (value) =>
        value.trim().length >= 6
          ? null
          : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = (values) => {
    // TODO: Replace with real auth logic
    console.log("Submitting:", values);
    // router.push("/admin/dashboard");
  };

  return (
    <div className="admin relative h-[100dvh] flex flex-col items-center gap-8">
      {/* Background */}
      <Image
        src={background}
        alt=""
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Logo */}
      <Logo className="w-[241px] h-[40px] lg:absolute lg:left-[77px] text-white lg:top-4 mt-10" />

      {/* Customer Login (relative to page) */}
      <Button
        unstyled
        onClick={() => router.push("/login")}
        className="hidden lg:flex items-center justify-center
                   absolute top-6 right-6 z-10
                   px-6 py-3 border border-[#E7E7E7] bg-black text-white font-bold
                   hover:bg-[#E7E7E7] hover:text-black transition-all duration-200
                   rounded"
      >
        Customer Login
      </Button>

      {/* Centered card */}
      <div className="w-full h-full flex flex-col items-center lg:justify-center lg:px-[30.306vw] md:px-[25.879vw] px-[16px] ">
        <div
          className="w-full max-w-[560px]
                     lg:p-6 p-4 border border-[#525252] rounded-lg
                     bg-gradient-to-t from-[#000000] to-[#525252]
                     backdrop-blur-[5.5px]"
        >
          <h2 className="text-white font-bold lg:text-[36px]/[130%] text-[24px]/[130%]">
            SK BlackRock Financial Admin
          </h2>
          <p className="mt-5 lg:text-[18px]/[150%] text-[#BDBDBD] mb-6">
            Login to your account
          </p>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            {/* Email */}
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              className="w-full mb-6"
              classNames={{
                root: "w-full",
                input:
                  "h-[50px] bg-white border border-[#4B4B4B] rounded w-full",
                innerInput:
                  "bg-transparent border-none w-full h-full text-[14px] leading-[150%] px-[20px] py-[14.5px]",
                label: "text-white",
              }}
              {...form.getInputProps("email")}
            />

            {/* Password */}
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Enter your password"
              visible={visible}
              onVisibilityChange={toggle}
              className="w-full mb-6"
              classNames={{
                root: "w-full",
                input:
                  "h-[50px] bg-white border border-[#4B4B4B] rounded w-full",
                innerInput:
                  "bg-transparent border-none w-full h-full text-[14px] leading-[150%] px-[20px] py-[14.5px]",
                label: "text-white",
                visibilityToggle: "text-gray-600 hover:text-black",
              }}
              {...form.getInputProps("password")}
            />

            {/* Submit */}
            <Button
              unstyled
              type="submit"
              className="w-full !h-[50px] bg-white text-black !font-bold text-[16px]/[150%]
                         hover:bg-[#e6e0e0] transition-all duration-200
                         flex items-center justify-center cursor-pointer rounded"
            >
              Sign In
            </Button>
          </form>
        </div>
        <Button
          unstyled
          onClick={() => router.push("/login")}
          className="lg:hidden px-[12px_24px] !h-[50px] text-white !font-bold text-[16px]/[150%]
                         transition-all duration-200 flex items-center justify-center
                         border border-[#E7E7E7] hover:bg-[#E7E7E7] hover:text-black cursor-pointer rounded mx-auto mt-6"
        >
          Customer Login
        </Button>
      </div>
    </div>
  );
}
