import type { User } from "@prisma/client";
import type { RegisterUserSchema } from "@/components/modals/RegisterModal/types";

export type RegisterUserRequest = RegisterUserSchema;

export type RegisterUserResponse = {
  user: Pick<User, "id" | "name" | "username" | "email" | "coverImage">;
};
