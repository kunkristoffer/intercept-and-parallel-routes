import Image from "next/image";
import Link from "next/link";
import { HeaderNavbar } from "@/components/ui/menu/navbar/header";
import { UserMenu } from "@/components/ui/menu/user/container";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between 3xl:justify-around p-6">
      <Link href="/" aria-label="Gå til landingssiden">
        <Image
          className="w-28 lg:w-36"
          src="/LogoDark.svg"
          width={350}
          height={220}
          alt="Teamwork Logo"
        />
      </Link>
      <HeaderNavbar />
      <UserMenu />
    </header>
  );
}