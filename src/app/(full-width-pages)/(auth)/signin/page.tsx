import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";
import { auth } from "@/auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

export default async function SignIn() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return <SignInForm isSignIn={session != null} />;
}
