import { notFound } from "next/navigation";

export default function BlogPostPage({ params }) {
  if (!["first", "second"].includes(params.slug)) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Blog Post
      </h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
