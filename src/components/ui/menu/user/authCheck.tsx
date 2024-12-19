"use client"

import { User } from "firebase/auth";
import { LoginButton } from "@/components/ui/buttons/user";
import { UserMenuHeader } from "./card";
import { useUserSession } from "@/hooks/useUserSession";

export function UserMenuAuthCheck({ initialUser }: { initialUser: User }) {
  const user = useUserSession(initialUser);

  return user ? <UserMenuHeader {...user} /> : <LoginButton />
}