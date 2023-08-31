import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { registerUser } from "@/api/users";
import { type RegisterUserSchema, registerUserSchema } from "../types";
import type { APIError } from "@/types/api";

const defaultValues: RegisterUserSchema = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const useLogin = () => {
  const form = useForm({
    resolver: zodResolver(registerUserSchema),
    defaultValues,
  });

  const { mutate: register, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: async (data) => {
      try {
        const { email, password } = form.getValues();
        await signIn("credentials", {
          email,
          password,
          redirect: true,
        });
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
    },
    onError: (err: APIError) => {
      const { code } = err.response?.data!;
      if (code == "USERNAME_ALREADY_EXISTS") {
        form.setError("username", {
          type: "manual",
          message: "Username already exists",
        });
      }
      if (code == "EMAIL_ALREADY_EXISTS") {
        form.setError("email", {
          type: "manual",
          message: "Email already exists",
        });
      }
    },
  });

  const onSubmit = useCallback(
    async (data: RegisterUserSchema) => {
      register(data);
    },
    [register]
  );

  return { form, onSubmit, isLoading };
};

export default useLogin;
