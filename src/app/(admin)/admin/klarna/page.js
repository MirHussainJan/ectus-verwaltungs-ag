// app/admin/klarna/page.jsx
"use client";

import React from "react";
import { Input } from "@mantine/core";
import { useForm } from "@mantine/form";
import EuroIcon from "../../../../assets/icons/EuroIcon";

export default function Page() {
    const form = useForm({
        initialValues: { price: "" },
        validate: {
            price: (value) => {
                if (!value?.trim()) return "Price is required";
                const num = Number(value.replace(/[^0-9.]/g, ""));
                if (Number.isNaN(num)) return "Enter a valid number";
                if (num <= 0) return "Price must be greater than 0";
                return null;
            },
        },
    });

    const onSubmit = (values) => {
        // You can call your API here. For now, just log it.
        console.log("Updating Klarna price:", values.price);
    };

    return (
        <div className="w-[200px]">
            <h2 className="mb-5 font-bold md:text-[24px]/[150%] text-[20px]/[150%]">
                Klarna Details
            </h2>
            <form onSubmit={form.onSubmit(onSubmit)} className="max-w-[380px] space-y-4">
                <div>
                    <p className="mb-2.5 font-medium text-[14px]/[150%] text-[#191919]">
                        Klarna Price
                    </p>
                    <Input
                        type="number"
                        placeholder="Enter price"
                        size="md"
                        rightSection={
                            <div className="h-full flex items-center">
                                <EuroIcon className="w-[17px] h-[36px] text-[#191919]" />
                            </div>
                        }
                        rightSectionPointerEvents="none"
                        {...form.getInputProps("price")}
                        error={form.errors.price}
                    />

                    {form.errors.price ? (
                        <p className="mt-1 text-[12px] text-red-600">{form.errors.price}</p>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="bg-black text-white font-bold h-[48px] w-[199px] rounded-none"
                >
                    Update
                </button>
            </form>
        </div>
    );
}
