import Link from "next/link";

export function HeaderNavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li className="hover:text-orange-500">
          <Link href="/news">news (modal)</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/blog">blog</Link>
        </li>
        <li className="hover:text-orange-500">
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}
