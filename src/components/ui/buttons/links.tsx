import Link from "next/link";

export function ButtonLink({ href, text, preFetch = true }: { href: string; text: string, preFetch?: boolean }) {
  return (
    <Link
      href={href}
      prefetch={preFetch}
      className="bg-teamwork-primary-orange w-full md:w-fit px-6 py-3 text-base rounded-md font-semibold text-center text-kv-white hover:bg-teamwork-primary-orange/90"
    >
      {text}
    </Link>
  );
}
