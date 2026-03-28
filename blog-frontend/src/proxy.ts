import { NextRequest, NextResponse} from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export const proxy = async (request:NextRequest) => {
  console.log("Hello from proxy file: ", request.url);

  const pathname = request.nextUrl.pathname;

  const { data: session } = await userService.getSession();
  console.log("Current user session: ", session);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let isAdmin = false;

  if (session) {
    isAdmin = session?.user?.role === Roles.admin;
  }

  if (isAdmin && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/dashboard",
    "/dashbaord/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
