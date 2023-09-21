"use client";

import React from "react";
import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface InputFormFieldProps {
    control: Control<any>;
    name: string;
    label?: string;
    placeholder?: string;
}

const InputFormField = ({
    control,
    name,
    label,
    placeholder,
}: InputFormFieldProps) => {
    return (
        <>
            <FormField
                control={control}
                name={name}
                render={({ field }) => (
                    <FormItem
                    >
                        <div className="flex justify-between gap-5 items-center text-sm">
                                <div>
                                    <Label
                                    >
                                        {label}:
                                    </Label>
                                </div>
                                <div>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder={placeholder}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </div>
                        </div>
                    </FormItem>
                )}
            />
        </>
    );
};

export default InputFormField;