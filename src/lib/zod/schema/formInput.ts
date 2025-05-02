"use client";

import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .regex(/^\d{7,15}$/, "Phone number must be 7 to 15 digits"),
    message: z.string().min(1, "Message is required"),
});

export type FormInput = z.infer<typeof formSchema>;
