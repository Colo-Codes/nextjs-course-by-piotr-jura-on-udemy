"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Pagination({ pageCount }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const params = new URLSearchParams(searchParams);

  const pagesElement = pages.map((pageNumber) => {
    params.set("page", pageNumber);
    return (
      <li
        key={pageNumber}
        className={`list-none px-1 rounded ${
          pageNumber === Number(searchParams.get("page") ?? 1)
            ? "bg-slate-100"
            : "bg-slate-800"
        }`}
      >
        <Link
          key={pageNumber}
          href={`${pathname}?${params.toString()}`}
          className={`no-underline ${
            pageNumber === Number(searchParams.get("page") ?? 1)
              ? " text-slate-800"
              : " text-slate-100"
          }`}
        >
          {pageNumber}
        </Link>
      </li>
    );
  });

  return <ul className="flex space-x-2">{pagesElement}</ul>;
}
