import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex py-4 items-center justify-start md:justify-between">
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
