import prisma from "../../db/prisma";
import type { PostStatus } from "../../generated/prisma/enums";
import type {
  PostCreateInput,
  PostFindManyArgs,
  PostWhereInput,
} from "../../generated/prisma/models";

//? keep either this one or the one right after this api --where 'AND' is used
/* const getAllPosts = async (searchText?: string) => {
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
}; */

//? use of 'AND'
const getAllPosts = async ({
  searchText,
  tags,
  status,
}: {
  searchText?: string | undefined;
  tags?: string;
  status?: PostStatus;
}) => {
  const query: PostFindManyArgs = {};

  const andConditions: PostWhereInput[] = [];

  if (searchText?.trim()) {
    andConditions.push({
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
          tags: {
            has: searchText,
          },
        },
      ],
    });
  }

  if (tags) {
    const tagsArray = (tags as string).split(',') || [];

    andConditions.push({
      tags: {
        hasSome: tagsArray,
      },
    });
  }

  if (status) {
    andConditions.push({
      status: status
    });
  }

  if (andConditions.length) {
    query.where = {
      AND: andConditions,
    };
  }

  const result = await prisma.post.findMany(query);
  return result;
};

//* filter posts by tags
const filterPostsByTags = async (tags: string[]) => {
  const filteredPosts = await prisma.post.findMany({
    where: {
      tags: {
        // hasSome : tags //* partial matches allowed
        hasEvery: tags, //* must match all items, otherwise returns []
      },
    },
  });

  return filteredPosts;
};

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
