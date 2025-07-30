import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
import { auth } from "@/auth";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default async function SignUp() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  return <SignUpForm isSignIn={session != null} />;
}
