import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";

const titles = {
  first: "Hello first!",
  second: "Hello second!",
};

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;

  let description = (await parent).description ?? "Default description";

  try {
    const { frontmatter } = await getPost(slug);

    return {
      title: frontmatter.title,
      description: frontmatter.description ?? description,
    };
  } catch (e) {
    notFound();
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;

  try {
    post = await getPost(slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Blog Post
      </h1>
      <p className="mb-8">Slug: {slug}</p>
      <article className="prose dark:prose-invert max-w-none w-full">
        {post.content}
      </article>
    </div>
  );
}
