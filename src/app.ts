import express from 'express';
const app = express()

app.get('/',(req,res)=>{
    res.send("Blog app server running...");
})

export default app;