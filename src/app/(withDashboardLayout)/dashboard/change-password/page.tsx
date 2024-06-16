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

interface IFormInput {
  currentPassword: String;
  newPassword: String;
}

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
              {...register("currentPassword")}
              type="password"
            />
            <TextField
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              {...register("newPassword")}
              type="password"
            />
            <Button type="submit">Change Password</Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default ChangePassword;
