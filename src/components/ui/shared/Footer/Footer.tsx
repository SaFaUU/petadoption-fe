import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#023047", color: "white" }}>
      <Container sx={{ py: 5 }}>
        <Grid
          container
          sx={{
            textAlign: "left",
            justifyContent: "space-between",
          }}
          gap={{
            xs: 5,
            sm: 0,
            lg: 0,
          }}
        >
          <Grid item xs={12} sm={6} lg={3}>
            <Stack
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                GetPet
              </Typography>
              <Stack direction={"column"} gap={1} my={2}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  Email: contact@getapet.com
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  Phone: 0123456789
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems={"center"}
              gap={2}
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Link
                href="https://facebook.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookIcon sx={{ width: 30, height: 30 }} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <InstagramIcon sx={{ width: 30, height: 30 }} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <YouTubeIcon sx={{ width: 30, height: 30 }} />
              </Link>
              <Link
                href="https://google.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <GoogleIcon sx={{ width: 30, height: 30 }} />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <XIcon sx={{ width: 30, height: 30 }} />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Stack
              direction={"column"}
              gap={1}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                About Us
              </Typography>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Home
                </Typography>
              </Link>
              <Link
                href="/about-us"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  About Us
                </Typography>
              </Link>
              <Link
                href="/contact-us"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={3} lg={3}>
            <Stack
              direction={"column"}
              gap={1}
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Help
              </Typography>
              <Link
                href="/faq"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  FAQ
                </Typography>
              </Link>
              <Link
                href="/terms-and-conditions"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  Terms and Conditions
                </Typography>
              </Link>
              <Link
                href="/privacy-policy"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "400",
                    color: "white",
                    fontSize: "13px",
                  }}
                >
                  Privacy Policy
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        {/* <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 5,
            fontSize: "11px",
            color: "white",
          }}
        >
          GetPet is a platform that connects pet owners with their favourite
          pets. Adopting a pet can be a great way to make a difference in the
          lives of others.
        </Typography> */}
      </Container>
      <Box sx={{ textAlign: "center", py: 1, backgroundColor: "white" }}>
        <Typography variant="body2" sx={{ color: "black" }}>
          Copyright © 2024 GetPet All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
