"use client";

import React from "react";
import Image from "next/image";
import { TextInput, PasswordInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "sonner";
import Signupbg from "../../assets/images/singup bg.png";
import SignupIpad from "../../assets/images/SignupIpad.png";
import Logo from "../../assets/icons/logo";
const Page = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = (values) => {
    // Simulated login check
    if (
      values.email === "test@example.com" &&
      values.password === "password123"
    ) {
      toast.success("Login Successful! Welcome back.");
    } else {
      toast.error("Invalid email or password");
    }
    console.log(values);
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <Logo className="w-[241px] h-[40px] md:absolute md:top-14 md:left-14 z-50 md:text-white text-black static my-6 mt-14" />
      <div className="md:flex lg:w-[45.833%] hidden md:w-[50%] w-full h-screen">
        <Image
          src={Signupbg}
          alt="Signup Background"
          className="w-full h-full object-cover hidden lg:block"
        />
        <Image
          src={SignupIpad}
          alt="Signup Background"
          className="w-full h-full object-cover hidden md:block lg:hidden"
        />
      </div>

      <div className="flex flex-1 md:w-[50%] w-full flex-col gap-6 md:gap-[30px] justify-center lg:px-[12.361vw] md:px-[8.252vw] px-[16px]">
        <div className="flex flex-col md:gap-5 gap-3">
          <h2 className="font-bold text-[24px]/[130%] lg:text-[36px]/[130%]">
            Welcome to SK BlackRock Financial
          </h2>
          <p className="text-[18px]/[150%] text-[#757575]">
            Login to your account
          </p>
        </div>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5"
        >
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            className="w-full"
            {...form.getInputProps("email")}
          />

          <div className="flex flex-col gap-2">
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              withAsterisk
              className="w-full"
              {...form.getInputProps("password")}
            />

            <div className="text-right mt-3 text-[#4B4B4B] text-[14px]/[150%]">
              Forgot Password?
            </div>
          </div>

          <Button
            unstyled
            type="submit"
            fullWidth
            className="!h-[50px] bg-[#000000] text-white !font-bold text-[16px]/[150%] hover:bg-[#1a1a1a] transition-all duration-200 flex items-center justify-center"
          >
            Sign In
          </Button>
          <Button
            unstyled
            fullWidth
            className="!h-[50px] bg-white text-black !font-bold text-[16px]/[150%] transition-all duration-200 flex items-center justify-center border-[#E7E7E7] border-1 lg:absolute lg:top-6 lg:right-6 lg:p-[12px_24px] hover:bg-[#E7E7E7] cursor-pointer"
          >
            Admin Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
