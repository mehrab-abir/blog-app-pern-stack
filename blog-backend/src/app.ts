import express from 'express';
import cors from 'cors';
import { postRouter } from './modules/posts/post.routers';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import errorHandler from './utils/errorHandler';
import notFoundRoute from './utils/notFoundRoute';
const app = express()

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.get('/',(req,res)=>{
    res.send("Blog app server running...");
})

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use('/posts',postRouter);

//* error handler
app.use(notFoundRoute);
app.use(errorHandler);

export default app;