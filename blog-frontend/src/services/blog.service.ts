import { env } from "@/env";

const apiUrl = env.API_URL;

export const blogService = {
  getBlogPosts: async () => {
    try {
      const res = await fetch(`${apiUrl}/posts/all-posts`);
      const result = await res.json();

      if (result.success) {
        return { result };
      }
    } catch (err) {
      return {
        data: null,
        error: { message: "something went wrong", err: err },
      };
    }
  },
};
