"use server";
import { cookies } from "next/headers";
import { signOut } from "next-auth/react";

export const deleteCookie = () => {
  cookies().delete("token");
};
