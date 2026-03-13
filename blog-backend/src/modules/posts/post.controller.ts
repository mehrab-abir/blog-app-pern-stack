import type { NextFunction, Request, Response } from "express";
import { postServices } from "./post.service";

//? for seaching only
/* const getAllPosts = async (req: Request, res: Response) => {
  const { searchText } = req.query;
  try {
    const result = await postServices.getAllPosts(
      searchText as string | undefined,
    );
    res.json({
      success: true,
      message: "All posts",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
    });
  }
}; */

//? for search, filter of multiple paramters..all in one,,using 'AND'
const getAllPosts = async(req:Request, res:Response, next:NextFunction)=>{  
  try{
    const result = await postServices.getAllPosts(req.query as any);
    res.json({
      success : true,
      message : "Found result",
      data : result
    })
  }
  catch(err){
    next(err);
  }
}

const filterPostsByTags = async (req: Request, res: Response) => {
  const { tags } = req.query;

  const tagsArray = (tags as string).split(",") || [];

  try {
    const result = await postServices.filterPostsByTags(tagsArray);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const createPost = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await postServices.createPost(req.body);
    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const postController = {
  getAllPosts,
  filterPostsByTags,
  createPost,
};
