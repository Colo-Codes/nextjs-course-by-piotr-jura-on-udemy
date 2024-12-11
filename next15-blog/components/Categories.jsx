import Counter from "@/components/Counter";
import Link from "next/link";
import ServerComponent from "@/components/ServerComponent";

if (process.browser) {
  console.log(">>> 🍏 <Categories>  (server component) - on CLIENT side");
} else {
  console.log(">>> 🍎 <Categories>  (server component) - on SERVER side");
}

export default function Categories() {
  return <div>This are the categories...</div>;
}
