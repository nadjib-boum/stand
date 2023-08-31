import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession, type AuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import db from "@/utils/db";
import { sleep } from "@/helpers";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing credentials");
          }

          await sleep(1100);

          const user = await db.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            throw new Error("Invalid credentials");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.hashedPassword!
          );

          if (!isValid) {
            throw new Error("Invalid credentials");
          }

          return user;
        } catch (e) {
          return Promise.reject(e);
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const getSession = async (): Promise<boolean> => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return false;
  }

  return true;
};
