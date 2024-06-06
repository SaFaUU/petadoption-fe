import TopBanner from "@/components/ui/Homepage/TopBanner/TopBanner";
import NavigationBar from "@/components/ui/shared/NavigationBar/NavigationBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <TopBanner /> */}
      <NavigationBar />
      {children}
    </>
  );
};

export default layout;
