"use client";

import Header from "@/components/Header";
import Categories from "@/components/Categories";

export default function ListingLayout({ children }) {
  if (process.browser) {
    console.log(">>> 🍏 app/listing/layout - on CLIENT side");
  } else {
    console.log(">>> 🍎 app/listing/layout - on SERVER side");
  }

  return (
    <div>
      <Header />
      <Categories />
      <div>{children}</div>
    </div>
  );
}
