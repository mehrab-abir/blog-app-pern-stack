import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Sidebar></Sidebar>
      <div className="ml-48">
        <h1 className="text-2xl font-bold text-blue-500">This is dashboard </h1>
        {children}
      </div>
    </div>
  );
};

export default layout;
