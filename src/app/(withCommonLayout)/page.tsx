import Heroslider from "@/components/ui/Homepage/Heroslider/Heroslider";
import WelcomeSection from "@/components/ui/Homepage/WelcomeSection/WelcomeSection";
import NavigationBar from "@/components/ui/shared/NavigationBar/NavigationBar";
import { Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Heroslider />
      <WelcomeSection />
    </Container>
  );
};

export default HomePage;
