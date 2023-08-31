import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { type LoginSchema, loginSchema } from "../types";

const useLogin = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async (data: LoginSchema) => {
    setIsLoading(true);
    await signIn("credentials", {
      ...data,
      redirect: true,
    });
    setIsLoading(false);
  }, []);

  return { form, onSubmit, isLoading };
};

export default useLogin;
