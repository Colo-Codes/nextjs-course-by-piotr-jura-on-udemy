import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Pagination from "@/components/Pagination";

export default async function BlogsPage({ searchParams }) {
  let { tags, page, limit, order } = await searchParams;
  tags = tags?.split(",");
  page = page ?? 1;
  limit = limit ?? 2;
  order = order ?? "newest";

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  const allTags = posts.reduce((acc, post) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
    }

    return acc;
  }, []);

  let tagElements = [
    <li key="all" className="list-none bg-slate-500 px-1 rounded">
      <Link href="/blog" className="no-underline">
        All
      </Link>
    </li>,
    <span key={"span"}>|</span>,
  ];

  tagElements.push(
    allTags.map((tag) => (
      <li key={tag} className="list-none bg-slate-500 px-1 rounded">
        <Link href={`/blog?tags=${tag}`} className="no-underline">
          {tag}
        </Link>
      </li>
    ))
  );

  return (
    <div className="prose dark:prose-invert">
      <h1>Recent posts</h1>
      <h3>Filter by tag:</h3>
      <ul className="flex space-x-2">{tagElements}</ul>
      <h3>Order by:</h3>
      <p>
        {order === "newest" ? (
          <Link href="/blog?order=oldest">Oldest</Link>
        ) : (
          <Link href="/blog?order=newest">Newest</Link>
        )}
      </p>

      <hr />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <li key={post.slug} className="mb-4 list-disc list-inside">
            <Link href={`/blog/${post.slug}`} className="no-underline">
              {post.frontmatter.title}
            </Link>
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

      <hr />

      <div className="mt-8">
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  );
}
