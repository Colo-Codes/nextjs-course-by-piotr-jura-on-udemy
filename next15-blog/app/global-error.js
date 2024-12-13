"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <html>
      <body>
        <h1 className="text-2xl text-red-400 font-bold mb-4">Error!</h1>
        <p>Something happened that it shouldn&apos;t have happened.</p>
        <Link href="/" className="underline text-blue-500">
          Go back to the home page
        </Link>
      </body>
    </html>
  );
}
