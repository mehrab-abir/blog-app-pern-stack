import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ThemeModeToggle";
import LogOutBtn from "./LogOutBtn";
import { userService } from "@/services/user.service";

const Navbar = async () => {
  const { data: session } = await userService.getSession();

  return (
    <nav className="flex items-center gap-10">
      <ModeToggle></ModeToggle>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/courses">Courses</Link>

      {session?.user ? (
        <LogOutBtn></LogOutBtn>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
