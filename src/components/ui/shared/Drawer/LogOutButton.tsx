import { deleteCookie } from "@/utils/auth";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export function LogOutButton() {
  return (
    <Button
      variant="contained"
      color="error"
      sx={{ width: "100%" }}
      onClick={() => {
        signOut({
          callbackUrl: "/signin",
          redirect: true,
        });
        deleteCookie();
      }}
    >
      Logout
    </Button>
  );
}
