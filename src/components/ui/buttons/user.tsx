"use client"

import Link from "next/link";
import { signInWithGoogle, signOut } from "@/lib/firebase/client/auth";

export function LoginButton() {
  const handleSignIn = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    signInWithGoogle();
  };
  return (
    <button
      onClick={handleSignIn}
      className="bg-teamwork-primary-orange w-full md:w-fit px-4 py-2 text-base rounded-md font-semibold text-center text-kv-white hover:bg-teamwork-primary-orange/90"
    >
      Logg in
    </button>
  );
}

export function SignoutButton() {
  function handleSignOut  (event: React.MouseEvent<HTMLElement>)  {
      event.preventDefault();
      signOut();
    };
  return (
    <button
      onClick={handleSignOut}
      className="bg-teamwork-primary-orange/80 hover:bg-teamwork-primary-orange py-2 text-white rounded active:scale-105"
    >
      sign out
    </button>
  );
}

export function UserMenuLinks({
  icon,
  href,
  name,
  notifications,
}: {
  href: string;
  name: string;
  icon: React.ReactNode;
  notifications?: number;
}) {
  return (
    <Link
      href={href}
      className="flex gap-4 items-center px-4 py-2 hover:bg-slate-100 focus:bg-slate-200"
    >
      <span className="relative">
        {icon}
        {notifications && (
          <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
            {notifications}
          </span>
        )}
      </span>
      <span>{name}</span>
    </Link>
  );
}
