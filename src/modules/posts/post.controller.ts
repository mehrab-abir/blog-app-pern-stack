import type { Request, Response } from "express";
import { postServices } from "./post.service";

const getAllPosts = (req: Request, res: Response) => {
  try {
    const result = postServices.getAllPosts();
    res.json({
      success: true,
      message : "data received",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
    });
  }
};

const createPost = (req: Request, res: Response) => {
  try {
    const result = postServices.createPost(req.body);
    res.json({
        success: true,
        data : result
    })
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
    });
  }
};

export const postController = {
  getAllPosts,
  createPost,
};
