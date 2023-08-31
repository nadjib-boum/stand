import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";
import type { CheckUserRequest } from "@/types/api/users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password }: CheckUserRequest = await req.body();

      if (!email || !password) {
        return res.status(400).end("Data is missing");
      }

      // const user = await db.user.count({ where: { email, } });
    } catch (error) {
      console.log(error);
      return res.status(400).end();
    }
  }

  return res.status(405).end();
}
