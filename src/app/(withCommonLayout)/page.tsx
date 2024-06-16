import AdoptionProcess from "@/components/ui/Homepage/AdoptionProcess/AdoptionProcess";
import Heroslider from "@/components/ui/Homepage/Heroslider/Heroslider";
import HowYouCanHelp from "@/components/ui/Homepage/HowYouCanHelp/HowYouCanHelp";
import WelcomeSection from "@/components/ui/Homepage/WelcomeSection/WelcomeSection";
import WhyAdopt from "@/components/ui/Homepage/WhyAdopt/WhyAdopt";
import NavigationBar from "@/components/ui/shared/NavigationBar/NavigationBar";
import { Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Heroslider />
      <WelcomeSection />
      <WhyAdopt />
      <AdoptionProcess />
      {/* <HowYouCanHelp /> */}
    </Container>
  );
};

export default HomePage;
