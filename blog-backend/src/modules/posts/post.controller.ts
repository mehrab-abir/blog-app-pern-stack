import type { Request, Response } from "express";
import { postServices } from "./post.service";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const result = await postServices.getAllPosts();
    res.json({
      success: true,
      message : "All posts",
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

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await postServices.createPost(req.body);
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
