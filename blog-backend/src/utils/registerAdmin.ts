/* import dotenv from "dotenv";
dotenv.config();
import prisma from "../db/prisma";

const registerAdmin = async()=>{
    try {
      const adminData = {
        name: "Admin 1",
        email: "admin@blog.com",
        role: "admin",
        password: "admin1010",
      };

      const alreadyExists = await prisma.user.findUnique({
        where: {
          email: adminData.email,
        },
      });

      if (alreadyExists) {
        throw new Error("user already exists");
      }

      const adminSignup = await fetch(
        "http://localhost:3000/api/auth/sign-up/email",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(adminData),
        },
      );

      if (adminSignup.ok) {
        console.log("\tAdmin created :: ", adminData.name);

        await prisma.user.update({
          where: {
            email: adminData.email,
          },
          data: {
            emailVerified: true,
          },
        });

        console.log("\t*** Admin email verified ***");
        console.log("\t::Finished -- success");
      }
    } catch (err) {
      console.log("Error registering admin::", err);
    } finally {
      await prisma.$disconnect();
    }
}

registerAdmin();
 */