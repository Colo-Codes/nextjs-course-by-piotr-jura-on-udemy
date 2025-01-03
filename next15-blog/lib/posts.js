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
        frontmatter: frontmatter || {},
        slug: filename.replace(".mdx", ""),
      };
    })
  );

  let filteredPosts = [...posts];

  // Filter by tags if any are specified
  if (tags.length > 0) {
    filteredPosts = posts.filter((post) => {
      const postTags = post.frontmatter.tags || [];
      return tags.some((tag) => postTags.includes(tag));
    });
  }

  // Sort posts
  filteredPosts.sort((a, b) => {
    if (newest) {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    }
    return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    posts: filteredPosts.slice(startIndex, endIndex),
    pageCount: Math.ceil(filteredPosts.length / limit),
  };
}
