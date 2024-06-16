import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";

const HowYouCanHelp = () => {
  const helpOptions = [
    {
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers. Help with tasks such as animal care, adoption events, and administrative support.",
      icon: <VolunteerActivismIcon fontSize="large" />,
    },
    {
      title: "Donate",
      description:
        "Your donations make a difference. Funds go towards medical care, food, and supplies for the animals. Every dollar helps save a life.",
      icon: <AttachMoneyIcon fontSize="large" />,
    },
    {
      title: "Foster",
      description:
        "Open your home temporarily to a pet in need. Fostering helps animals adjust to a home environment and increases their chances of finding a permanent home.",
      icon: <HomeIcon fontSize="large" />,
    },
  ];

  return (
    <Container>
      <Box my={5}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom={true}
          fontWeight={"bold"}
          sx={{ mb: 5 }}
        >
          How You Can Help
        </Typography>
        <Grid container spacing={4}>
          {helpOptions.map((option, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" justifyContent="center" mb={2}>
                    {option.icon}
                  </Box>
                  <Typography variant="h6" align="center" gutterBottom>
                    {option.title}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {option.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HowYouCanHelp;
