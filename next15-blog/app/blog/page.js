import fs from "fs";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { getPost } from "@/lib/posts";

export default async function BlogsPage() {
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

  console.log(">>> posts", posts);

  return (
    <div className="prose dark:prose-invert">
      <h1>Recent posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <li key={post.slug} className="mb-4 list-disc list-inside">
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            <div className="bg-gray-100 dark:bg-gray-900 rounded">
              <p className="p-2">
                <small className="block text-gray-500">
                  📆 {post.frontmatter.date}
                </small>
              </p>
              <p className="p-2">
                <small>📓 {post.frontmatter.description}</small>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
