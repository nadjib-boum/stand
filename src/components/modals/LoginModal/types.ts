import { z } from "zod";
import { type UseFormReturn } from "react-hook-form";

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid Email",
  }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export type LoginFormType = UseFormReturn<LoginSchema, any, undefined>;

export type LoginFormProps = {
  form: LoginFormType;
};
