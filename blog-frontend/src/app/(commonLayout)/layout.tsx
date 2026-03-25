import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header></Header>
      <div className="h-screen w-11/12 mx-auto mt-5">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
