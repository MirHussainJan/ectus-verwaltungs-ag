// app/admin/setting/page.jsx (or your current file)
"use client";

import React from "react";
import Image from "next/image";
import { PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import ProfilePic from "../../../../assets/images/profile.jpg";
import EditPen from "../../../../assets/icons/EditPen";

export default function Page() {
    const form = useForm({
        initialValues: {
            currentPassword: "",
            newPassword: "",
        },
        validate: {
            currentPassword: (v) => {
                if (!v.trim()) return "Current password is required";
                if (v.length < 6) return "Must be at least 6 characters";
                return null;
            },
            newPassword: (v, values) => {
                if (!v.trim()) return "New password is required";
                if (v.length < 6) return "Must be at least 6 characters";
                if (v === values.currentPassword) return "New password must be different";
                return null;
            },
        },
    });

    const onSubmit = (values) => {
        console.log("Saving password change:", values);
        // TODO: call your API here
    };

    return (
        <div className="">
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
                Settings
            </h2>

            {/* Profile card */}
            <div className="p-4 md:p-6 mb-5 w-full lg:w-[723px] bg-white shadow-[0_4px_6px_-2px_#10182808,0_12px_16px_-4px_#10182814]">
                <h5 className="mb-6 font-bold text-[16px]/[150%]">Profile</h5>

                <div className="relative inline-block">
                    <Image
                        className="rounded-full size-[72px] z-0"
                        src={ProfilePic}
                        alt="Profile Pic"
                    />
                    <div className="absolute bottom-[-6px] right-[-3px] z-10 rounded-full size-[30px] flex items-center justify-center shadow-[0_5px_30px_0_#19191940] bg-white">
                        <EditPen className="size-[20px]" />
                    </div>
                </div>
            </div>

            {/* Change password card */}
            <div className="p-4 md:p-6 mb-5 w-full lg:w-[723px] bg-white shadow-[0_4px_6px_-2px_#10182808,0_12px_16px_-4px_#10182814]">
                <h5 className="mb-6 font-bold text-[16px]/[150%]">Change Password</h5>

                <form onSubmit={form.onSubmit(onSubmit)} className="space-y-4">
                    {/* 2 fields in a row (responsive) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="mb-2 font-medium text-[14px]/[150%] text-[#191919]">
                                Current Password
                            </p>
                            <PasswordInput
                                placeholder="Enter Current Password"
                                classNames={{
                                    input: "h-[48px]",
                                }}
                                {...form.getInputProps("currentPassword")}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-medium text-[14px]/[150%] text-[#191919]">
                                New Password
                            </p>
                            <PasswordInput
                                placeholder="Enter New Password"
                                classNames={{
                                    input: "h-[48px]",
                                }}
                                {...form.getInputProps("newPassword")}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white font-bold h-[48px] w-full rounded-none"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
