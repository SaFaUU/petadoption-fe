"use client";
import { env } from "@/config";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface IFormInput {
  email: String;
  password: String;
  name: String;
  confirmPassword: String;
}

const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const user = await fetch(`${env.server_url}/register`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (user.ok) {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.ok) {
        router.push("/");
      }
    }
  };

  return (
    <Container
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",
          width: "400px",
          // height: "400px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
        >
          SIGN UP
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              {...register("name")}
              type="text"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              {...register("email")}
              type="email"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              {...register("password")}
              type="password"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              {...register("confirmPassword")}
              type="password"
            />
            <Button type="submit">Sign Up</Button>
            <Typography
              variant="body2"
              textAlign={"right"}
              color="text.secondary"
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Already have an account?{" "}
              <Link
                href="/signin"
                style={{ textDecoration: "none", color: "#FF6500" }}
              >
                Sign In
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
