import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className="container flex items-center justify-between font-mono max-w-fit">
      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/about/projects" className={styles.link}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
