import NavigationBar from "@/components/ui/shared/NavigationBar/NavigationBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
};

export default layout;
