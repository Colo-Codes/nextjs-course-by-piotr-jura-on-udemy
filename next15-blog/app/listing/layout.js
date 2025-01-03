"use client";

import Header from "@/components/Header";
import Categories from "@/components/Categories";

export default function ListingLayout({ children }) {
  return (
    <div>
      <Header />
      <Categories />
      <div>{children}</div>
    </div>
  );
}
