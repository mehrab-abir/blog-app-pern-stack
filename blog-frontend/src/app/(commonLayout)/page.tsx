import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function Home() {
  const { data: session } = await userService.getSession(); //see user.service.ts file in 'services' folder

  return (
    <div>
      <Button>Home Page</Button>

      {session ? (
        <>
          <h1 className="text-2xl font-bold text-emerald-600">User: {session?.user?.name} </h1>
          <p className="text-xl">Role: {session?.user?.role}</p>
        </>
      ) : (
        <h3 className="text-red-500 fotn-bold text-lg">Not Logged In</h3>
      )}
    </div>
  );
}
