import { env } from "@/env";
import { cookies } from "next/headers";

const authUrl = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      //getting user session using 'fetch' in the server component, send cookies manually
      const cookieStore = await cookies();

      const res = await fetch(`${authUrl}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (!session) {
        return { data: null, error: { message: "Session not found" } };
      }

      return { data: session, error: null };
    } catch (err: unknown) {
      console.log("Session fetching error: ", err);
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};

/*
  ways to get user session:
  - const session = authClient.useSession(); //hook
  - const session = await authClient.getSession();
  - const res = await fetch('app_url/api/auth/get-session',{headers : {cookies.toString()}})...await res.json();
*/
