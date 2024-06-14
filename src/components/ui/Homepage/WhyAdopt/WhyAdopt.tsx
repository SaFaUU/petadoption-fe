import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import image from "../../../../assets/Homepage/WhyAdopt.jpg";
import Image from "next/image";

const WhyAdopt = () => {
  return (
    <Box sx={{ backgroundColor: "white", p: 2, borderRadius: "10px", my: 2 }}>
      <Container sx={{ my: 5 }}>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
              }}
            >
              Why Adopt?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "400",
                color: "black",
                my: 1,
                fontSize: {
                  xs: "12px",
                  sm: "16px",
                },
                width: "90%",
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                marginBottom: {
                  xs: 2,
                  sm: 0,
                },
              }}
            >
              Adopting a pet is a rewarding experience that changes lives. By
              choosing to adopt, you're giving a homeless animal a second chance
              at happiness. You'll gain a loyal friend and companion who will
              bring joy and love into your life. Plus, you'll help reduce the
              number of animals in shelters and rescues.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                sm: "flex-end",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                paddingLeft: {
                  sm: 0,
                  lg: 10,
                },
              }}
            >
              <Image
                src={image}
                alt="image"
                objectFit="cover"
                height={400}
                width={400}
                style={{ borderRadius: "20px", height: "100%", width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyAdopt;
