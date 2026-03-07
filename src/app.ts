import express from 'express';
import { postRouter } from './modules/posts/post.routers';
const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Blog app server running...");
})

app.use('/posts',postRouter);

export default app;