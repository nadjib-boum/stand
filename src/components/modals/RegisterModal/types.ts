import { z } from "zod";
import { type UseFormReturn } from "react-hook-form";

export const registerUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Invalid Email",
  }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Short Password" }),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;

export type RegisterFormType = UseFormReturn<
  RegisterUserSchema,
  any,
  undefined
>;

export type RegisterFormProps = {
  form: RegisterFormType;
};
