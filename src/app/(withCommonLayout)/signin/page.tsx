"use client";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IFormInput {
  email: String;
  password: String;
}

const signin = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.status === 200) {
      router.push("/");
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
          SIGN IN
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
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
            <Button type="submit">Sign In</Button>
            <Typography
              variant="body2"
              textAlign={"right"}
              color="text.secondary"
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                style={{ textDecoration: "none", color: "#FF6500" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default signin;
