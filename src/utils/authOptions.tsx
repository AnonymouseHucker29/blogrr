import { NextAuthOptions } from "next-auth";
import dotenv from "dotenv";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

dotenv.config();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter password",
        },
      },
      async authorize(credentials, req) {
        console.log("Received credentials:", credentials);

        const user =
          credentials?.username === process.env.USERNAME &&
          credentials?.password === process.env.PASSWORD;

        console.log("Authorization result:", user);

        if (user) {
          return (
            console.log(`Successfully logged in as ${credentials?.username}`),
            {
              id: `1`,
              name: credentials?.username,
              password: credentials?.password,
            }
          );
        } else {
          return console.log("Incorrect credentials."), null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
