import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data: session } = await userService.getSession(); //see user.service.ts file in 'services' folder

  console.log("User session:", session);

  return (
    <div>
      <Button>Home Page</Button>
    </div>
  );
}
