"use server"

// import { User } from "firebase/auth";
// import { UserMenuHeader } from "@/components/ui/menu/user/container";
// import { getAuthenticatedAppForUser } from "@/lib/firebase/admin/app";
import { LoginButton } from "@/components/ui/buttons/user";

export async function UserMenu() {
  //const { currentUser } = await getAuthenticatedAppForUser();

  /* if (currentUser) {
    return <UserMenuHeader initialUser={currentUser.toJSON() as User} />
  } */

  return <LoginButton />
}
