import express from 'express';
import cors from 'cors';
import { postRouter } from './modules/posts/post.routers';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
const app = express()

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Blog app server running...");
})

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use('/posts',postRouter);

export default app;