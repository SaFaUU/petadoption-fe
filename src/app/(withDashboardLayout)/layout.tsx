import ResponsiveDrawer from "@/components/ui/shared/Drawer/ResponsiveDrawer";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
};

export default layout;
