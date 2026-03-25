import React from "react";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-500">
      <div className="w-11/12 mx-auto flex justify-between items-center ">
        <h1 className="text-2xl font-bold">Logo</h1>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
