"use client";
import ResponsiveDrawer from "@/components/ui/shared/Drawer/ResponsiveDrawer";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const layout = ({ children }: { children: React.ReactNode }) => {
  // const session: any = useSession();
  // const router = useRouter();

  // if (session.status === "unauthenticated") {
  //   router.push("/signin");
  // }

  return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
};

export default layout;
