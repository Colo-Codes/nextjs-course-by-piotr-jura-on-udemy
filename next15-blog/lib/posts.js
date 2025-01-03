import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export function loadPost(slug) {
  const filename = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "content", filename), "utf8");
}

export async function getPost(slug) {
  const source = loadPost(slug);

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
}

export async function getPosts({
  newest = true,
  page = 1,
  limit = 2,
  tags = [],
} = {}) {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  const posts = await Promise.all(
    files.map(async (filename) => {
      const { frontmatter } = await getPost(filename);

      return {
        frontmatter,
        slug: filename.replace(".mdx", ""),
      };
    })
  );

  // Filter by tags
  console.log(">>> tags from posts.js", tags, "posts", posts);
  if (tags.length > 0) {
    return posts.filter((post) => {
      console.log(">>> post.frontmatter.tags", post.frontmatter.tags);
      return tags.every((tag) => post.frontmatter.tags?.includes(tag));
    });
  }

  posts.sort((a, b) => {
    if (newest) {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    }

    return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
  });

  const startIndex = (page - 1) * limit; // 0
  const endIndex = page * limit; // 2

  // Return all posts if no filter is applied
  return {
    posts: posts.slice(startIndex, endIndex),
    pageCount: Math.ceil(posts.length / limit),
  };
}
