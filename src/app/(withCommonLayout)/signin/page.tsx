"use client";
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

interface IFormInput {
  email: String;
  password: String;
}

const signin = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
