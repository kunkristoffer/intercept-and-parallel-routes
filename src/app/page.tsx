import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-4 p-8 w-full justify-center items-center bg-slate-500 text-white">
      This is the home screen
      <Link className="bg-orange-600 hover:bg-orange-500 px-2" href="/newsletter">newsletter link</Link>
    </main>
  );
}
