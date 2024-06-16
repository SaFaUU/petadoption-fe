import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import TourIcon from "@mui/icons-material/Tour";
import HandshakeIcon from "@mui/icons-material/Handshake";

const adoptionProcess = [
  {
    icon: SavedSearchIcon,
    title: "Search",
    description:
      "Browse our database and use filters to find the perfect pet for you.",
  },
  {
    icon: ArrowUpwardIcon,
    title: "Submit",
    description:
      "Fill out our application form to help us match you with the right pet.",
  },
  {
    icon: MeetingRoomIcon,
    title: "Meet and Greet",
    description:
      "Meet the pet and their foster or shelter to see if they're a good fit.",
  },
  {
    icon: TourIcon,
    title: "Home Visit",
    description:
      "A home visit ensures your home is safe and suitable for your new pet.",
  },
  {
    icon: HandshakeIcon,
    title: "Finalize",
    description:
      "If all goes well, finalize the adoption and welcome your new pet home!",
  },
];

const AdoptionProcess = () => {
  return (
    <Container sx={{ textAlign: "center", my: 10 }}>
      <Typography
        sx={{ fontWeight: "bold", color: "text.primary", mb: 5 }}
        variant="h4"
      >
        Our Adoption Process
      </Typography>
      <Stack gap={2} sx={{ flexDirection: { sm: "column", lg: "row" } }}>
        {adoptionProcess.map((item) => (
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "white",
              p: 2,
              borderRadius: "15px",
              border: "1px solid #023047",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {item.icon && (
              <item.icon
                sx={{
                  fontSize: {
                    sm: 40,
                    lg: 100,
                  },
                  color: "primary.main",
                }}
              />
            )}
            <Typography sx={{ fontWeight: "bold", color: "text" }} variant="h6">
              {item.title}
            </Typography>
            {/* <Typography
              sx={{ fontWeight: "500", color: "#023047", my: 1 }}
              variant="body2"
            >
              {item.description}
            </Typography> */}
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default AdoptionProcess;
