"use client";
import { Container } from "@mui/material";
import React from "react";
import { useSession } from "next-auth/react";
import OurMission from "@/components/ui/AboutUs/OurMission/OurMission";
import TeamInformation from "@/components/ui/AboutUs/TeamInformation/TeamInformation";
import ContactUs from "@/components/ui/AboutUs/ContactUs/ContactUs";

const AboutUs = () => {
  const session = useSession();

  return (
    <Container>
      <OurMission />
      <TeamInformation />
      <ContactUs />
    </Container>
  );
};

export default AboutUs;
