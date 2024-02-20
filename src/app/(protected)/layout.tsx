import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";
import React from "react";

async function Layout({ children }: { children: React.ReactNode }) {
  const { session } = await getUserAuth();
  if (!session?.user) {
    redirect("/api/auth/signin?callbackUrl=/");
  }

  return <>{children}</>;
}

export default Layout;
