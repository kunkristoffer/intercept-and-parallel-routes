import { HeaderNavBar } from "../navigations/navbar";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-8 w-full bg-slate-700 text-white">
      <div>logo</div>
      <HeaderNavBar />
    </header>
  );
}
