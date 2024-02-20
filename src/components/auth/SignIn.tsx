"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

export default function SignIn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()}>
        <LogOut />
      </button>
    );
  }
  return <button onClick={() => signIn("github")}>Login</button>;
}
