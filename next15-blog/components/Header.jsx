import Link from "next/link";
import Navigation from "./Navigation";
// import Counter from "@/components/Counter";
// import ServerComponent from "@/components/ServerComponent";

if (process.browser) {
  console.log(">>> 🍏 <Header>  (server component) - on CLIENT side");
} else {
  console.log(">>> 🍎 <Header>  (server component) - on SERVER side");
}

export default function Header() {
  return (
    <header className="flex py-4 items-center justify-start md:justify-between">
      {/* <Counter />
      <ServerComponent /> */}
      <div>
        <Link
          href="/"
          className="hidden md:block border-dashed border-green-400 border p-1 text-green-400"
        >
          Damian
        </Link>
      </div>
      <Navigation />
      <div className="ml-auto md:ml-0">Toggle</div>
    </header>
  );
}
