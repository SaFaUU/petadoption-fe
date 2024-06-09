import { Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../../../assets/logo.png";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <Container sx={{ textAlign: "center", my: 5 }}>
      <Image src={logo} alt="logo" width={50} height={50} className="logo" />
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "primary.main" }}
      >
        Welcome to GetPet
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "500",
          color: "#023047",
          my: 1,
          width: "80%",
          mx: "auto",
          fontSize: "12px",
        }}
      >
        GetPet is a platform that connects pet owners with their favourite pets.
        Adopting a pet can be a great way to make a difference in the lives of
        others.
      </Typography>
    </Container>
  );
};

export default WelcomeSection;
