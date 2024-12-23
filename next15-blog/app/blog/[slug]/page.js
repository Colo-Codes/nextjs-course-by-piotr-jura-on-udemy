import { notFound } from "next/navigation";

const titles = {
  first: "Hello first!",
  second: "Hello second!",
};

export async function generateMetadata({ params, searchParams }, parent) {
  // // read route params
  // const { slug } = await params

  let description = (await parent).description ?? "Default description";

  // // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json());

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: titles[params.slug],
    description: description,
  };
}

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
