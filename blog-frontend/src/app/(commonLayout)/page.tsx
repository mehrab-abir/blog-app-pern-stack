import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data: session } = await userService.getSession(); //see user.service.ts file in 'services' folder

  return (
    <div>
      <Button>Home Page</Button>

      <h1 className="text-2xl font-bold">User: {session ? session?.user?.name : "not logged in"} </h1>
    </div>
  );
}
