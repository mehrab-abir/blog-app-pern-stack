import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sidebar></Sidebar>
      <div className="ml-48">{children}</div>
    </div>
  );
};

export default layout;
