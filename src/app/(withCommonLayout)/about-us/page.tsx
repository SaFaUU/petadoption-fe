"use client";
import { Container } from "@mui/material";
import React from "react";
import { useSession } from "next-auth/react";

const AboutUs = () => {
  const session = useSession();
  console.log(session);

  return (
    <Container>
      <h1>About us Page</h1>
    </Container>
  );
};

export default AboutUs;
