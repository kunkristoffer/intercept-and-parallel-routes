"use server"

import { User } from "firebase/auth";
import { getAuthenticatedAppForUser } from "@/lib/firebase/admin/app";
import { UserMenuAuthCheck } from "./authCheck";

export async function UserMenu() {
  const { currentUser } = await getAuthenticatedAppForUser();

  return <UserMenuAuthCheck initialUser={currentUser?.toJSON() as User} />
}
