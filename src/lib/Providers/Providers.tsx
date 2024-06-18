"use client";
import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

const Providers = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: any;
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default Providers;
