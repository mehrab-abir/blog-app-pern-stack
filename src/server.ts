import app from "./app";
import prisma from "./db/prisma";

const port = process.env.PORT || 3000;

const StartServer = async()=>{
    try{
        await prisma.$connect();
        console.log("DB Connected!!");

        app.listen(port,()=>{
            console.log(`blog app backend running on port- http://localhost:${port}`);
        })
    }
    catch(error){
        console.error("Failed to start server -->>", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}

StartServer();