import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const OurMission = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Stack gap={1}>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          fontWeight={"bold"}
          color={"primary.main"}
        >
          Our Mission
        </Typography>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          fontWeight={"bold"}
          color={"text.primary"}
        >
          We are committed to helping pets find their forever homes
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color={"text.primary"}
          sx={{ width: "80%", mx: "auto" }}
        >
          At GetPet, we believe that pets are important to us. They are part of
          our family and we are committed to helping them find their forever
          homes. We are passionate about pets, and we are committed to using
          technology and social media to help pets find their forever homes. We
          believe that pets are important to us, and we are committed to helping
          them find their forever homes.
        </Typography>
      </Stack>
    </Container>
  );
};

export default OurMission;
