import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";

const ContactUs = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "primary.main", mb: 5 }}
        alignItems={"center"}
        textAlign={"center"}
      >
        Contact Us
      </Typography>
      <Stack direction={{ sm: "column", lg: "row" }} gap={{ sm: 0, lg: 2 }}>
        <Box
          my={{
            sm: 2,
            lg: 0,
          }}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #023047",
            p: 2,
            flex: 1,
            gap: 4,
          }}
        >
          <PhoneIcon sx={{ fontSize: "50px", color: "primary.main" }} />
          <Typography variant="h6" fontWeight={"bold"}>
            By Email
          </Typography>
          <Typography>contact@getpet.com</Typography>
        </Box>
        <Box
          my={{
            sm: 2,
            lg: 0,
          }}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #023047",
            p: 2,
            flex: 1,
            gap: 4,
          }}
        >
          <AlternateEmailIcon
            sx={{ fontSize: "50px", color: "primary.main" }}
          />
          <Typography variant="h6" fontWeight={"bold"}>
            By Phone
          </Typography>
          <Typography>+8801859990442</Typography>
        </Box>
        <Box
          my={{
            sm: 2,
            lg: 0,
          }}
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "1px solid #023047",
            p: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <AlternateEmailIcon
            sx={{ fontSize: "50px", color: "primary.main" }}
          /> */}
          <Typography variant="h6" fontWeight={"bold"}>
            Social Media Links
          </Typography>
          <Stack
            my={2}
            direction="row"
            alignItems={"center"}
            gap={2}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
              },
            }}
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FacebookIcon sx={{ width: 30, height: 30, color: "#023047" }} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <InstagramIcon sx={{ width: 30, height: 30, color: "#023047" }} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <YouTubeIcon sx={{ width: 30, height: 30, color: "#023047" }} />
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <GoogleIcon sx={{ width: 30, height: 30, color: "#023047" }} />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              <XIcon sx={{ width: 30, height: 30, color: "#023047" }} />
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ContactUs;
