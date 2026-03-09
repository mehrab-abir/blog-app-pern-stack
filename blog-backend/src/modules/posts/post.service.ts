import prisma from "../../db/prisma";
import type { PostCreateInput } from "../../generated/prisma/models";

const getAllPosts = async ()=>{
    const allposts = await prisma.post.findMany();
    return allposts;
}
const createPost = async (data:PostCreateInput)=>{
    // console.log(data);
    const result = await prisma.post.create({data});
    return result;
}

export const postServices = {
  getAllPosts,
  createPost,
};