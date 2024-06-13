import TopBanner from "@/components/ui/Homepage/TopBanner/TopBanner";
import Footer from "@/components/ui/shared/Footer/Footer";
import NavigationBar from "@/components/ui/shared/NavigationBar/NavigationBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <TopBanner /> */}
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
