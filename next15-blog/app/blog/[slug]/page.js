import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

const titles = {
  first: "Hello first!",
  second: "Hello second!",
};

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;

  let description = (await parent).description ?? "Default description";

  return {
    title: titles[slug],
    description: description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  if (!["first", "second"].includes(slug)) {
    notFound();
  }

  const markdown = fs.readFileSync(
    path.join(process.cwd(), `content/${slug}.mdx`),
    "utf8"
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Blog Post
      </h1>
      <p className="mb-8">Slug: {slug}</p>
      <article className="prose dark:prose-invert max-w-none w-full">
        <MDXRemote source={markdown} />
      </article>
    </div>
  );
}
