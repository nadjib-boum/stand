import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import db from "@/utils/db";
import type {
  RegisterUserRequest,
  RegisterUserResponse,
} from "@/types/api/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { email, username, name, password }: RegisterUserRequest = req.body;

      if (!email || !username || !name || !password) {
        return res.status(400).end("Data is missing");
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await db.user.create({
        data: {
          email,
          username,
          name,
          hashedPassword,
        },
        select: {
          id: true,
          email: true,
          username: true,
          name: true,
          coverImage: true,
        },
      });

      const response: RegisterUserResponse = { user };

      return res.status(200).json(response);
    }

    return res.status(405).end();
  } catch (error: any) {
    console.log(error);

    if (error.code === "P2002" && error.meta.target[0] == "username") {
      return res.status(400).json({
        code: "USERNAME_ALREADY_EXISTS",
      });
    }

    if (error.code === "P2002" && error.meta.target[0] == "email") {
      return res.status(400).json({
        code: "EMAIL_ALREADY_EXISTS",
      });
    }

    return res.status(500).end();
  }
}
