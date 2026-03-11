import prisma from "../../db/prisma";
import type {
  PostCreateInput,
  PostFindManyArgs,
} from "../../generated/prisma/models";

const getAllPosts = async (searchText?: string) => {
  const query: PostFindManyArgs = {};

  if (searchText) {
    query.where = {
      OR: [
        {
          title: {
            contains: searchText,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: searchText,
            mode: "insensitive",
          },
        },
        {
          tags : {
            has : searchText
          }
        },
      ],
    };
  }

  const allposts = await prisma.post.findMany(query);

  return allposts;
};

const createPost = async (data: PostCreateInput) => {
  // console.log(data);
  const result = await prisma.post.create({ data });
  return result;
};

export const postServices = {
  getAllPosts,
  createPost,
};
