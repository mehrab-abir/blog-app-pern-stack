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

//* filter posts by tags
const filterPostsByTags = async(tags: string[]) =>{
    const filteredPosts = await prisma.post.findMany({
        where : {
            tags : {
                // hasSome : tags //* partial matches allowed
                hasEvery : tags //* must match all items, otherwise returns []
            }
        }
    });

    return filteredPosts;
}

const createPost = async (data: PostCreateInput) => {
  // console.log(data);
  const result = await prisma.post.create({ data });
  return result;
};

export const postServices = {
  getAllPosts,
  filterPostsByTags,
  createPost,
};
