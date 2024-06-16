import React from "react";
import { Container, Typography, Grid, Stack, Box } from "@mui/material";
import teamImage from "@/assets/AboutUs/Team.jpg";
import Image from "next/image";

const TeamInformation = () => {
  return (
    <Box sx={{ backgroundColor: "white", p: 2, borderRadius: "15px" }}>
      <Container sx={{ my: 5 }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid
            item
            sm={12}
            lg={6}
            sx={{
              textAlign: {
                sm: "center",
                lg: "left",
              },
            }}
          >
            <Stack
              gap={1}
              sx={{
                textAlign: {
                  xs: "center",
                  md: "center",
                  lg: "left",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={"bold"}
                color={"primary.main"}
              >
                Meet Our Team
              </Typography>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                color={"text.primary"}
              >
                Creating a community of adopters.
              </Typography>
              <Typography variant="body1" fontWeight={"400"} color={"black"}>
                Our dedicated team of animal lovers and experts work tirelessly
                to bring pets and people together. From veterinarians and animal
                behaviorists to volunteers and support staff, each member of our
                team is committed to ensuring every pet finds a loving home.
                Learn more about the passionate individuals who make GetPet a
                trusted resource for pet adoption.
              </Typography>
            </Stack>
          </Grid>

          <Grid
            item
            sm={12}
            lg={6}
            sx={{
              textAlign: {
                sm: "center",
                lg: "right",
              },
              my: {
                xs: 5,
                md: 5,
                lg: 0,
              },
            }}
          >
            <Image
              src={teamImage}
              alt="Team"
              width={400}
              height={400}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamInformation;
