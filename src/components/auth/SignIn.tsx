"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (session) {
    return (
      <button onClick={() => signOut()}>
        <LogOut />
      </button>
    );
  }
  return (
    <button onClick={() => signIn("github")}>
      <LogIn className="w-5 h-5" />
    </button>
  );
}
