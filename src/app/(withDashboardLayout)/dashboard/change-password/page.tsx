"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { useChangePasswordMutation } from "@/redux/api/userApi";

interface IFormInput {
  oldPassword: String;
  newPassword: String;
  confirmNewPassword: String;
}

const ChangePassword = () => {
  const [error, setError] = React.useState("");
  const [changePassword] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (data.newPassword !== data.confirmNewPassword) {
      setError("Passwords do not match");
      return;
    }

    const res: any = await changePassword({
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });

    if (res?.data?.success === true) {
      toast.success("Password updated successfully");
      setError("");
    } else {
      toast.error(`${res?.error?.data?.message}`);
    }
    reset();
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ backgroundColor: "white", p: 5, borderRadius: "15px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
          >
            Change Password
          </Typography>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              minWidth: {
                sm: "200px",
                lg: "500px",
              },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Current Password"
              variant="outlined"
              {...register("oldPassword")}
              type="password"
            />
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              {...register("newPassword")}
              type="password"
            />
            <TextField
              id="outlined-basic"
              label="Confirm New Password"
              variant="outlined"
              {...register("confirmNewPassword")}
              type="password"
            />
            {error && (
              <Typography sx={{ color: "red", textAlign: "right" }}>
                {error}
              </Typography>
            )}
            <Button type="submit">Change Password</Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;
