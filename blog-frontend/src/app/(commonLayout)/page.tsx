import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";

/*
  ways to get user session:
  - const session = authClient.useSession();
  - const session = await authClient.getSession();
  - connt res = await fetch('app_url/api/auth/get-session',{headers : {cookies.toString()}})...await res.json();
*/

export default async function Home() {

  //getting user session uisng 'fetch' in the server component, send cookies manually
  const cookieStore = await cookies();

  const res = await fetch('http://localhost:8000/api/auth/get-session',{
    headers : {
      cookie : cookieStore.toString()
    },
    cache : "no-store"
  })

  const session = await res.json();
  console.log(session);


  return (
    <div>
      <Button>Home Page</Button>
    </div>
  );
}
