import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
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
    try {
      setIsLoading(true);
      const signin = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (!signin?.ok) {
        throw new Error(signin?.error!);
      }
    } catch (err) {
      if (err instanceof Error && err.message === "Invalid credentials") {
        toast.error("Invalid credentials");
      }
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { form, onSubmit, isLoading };
};

export default useLogin;
