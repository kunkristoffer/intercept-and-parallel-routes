"use server";

import { UserRecord } from "firebase-admin/auth";
import { newsletterSignup, getAllUsers, getUserByUid, grantRole, getRole } from "./app";

export async function handleNewsletterSignup(email: string) {
  newsletterSignup(email);
}

export async function handleUserSetRole(email: string, role?: 'admin'|'moderator'|'blogger'|'user'|string) {
 return await grantRole(email, role)
}

export async function handleUserGetRole(email: string) {
  return await getRole(email)
 }

export async function handleGetAllUsers(
  ammount?: number,
  pageToken?: string
): Promise<{ users: UserRecord[]; pageToken?: string }> {
  // Nextjs does not like .toJson() so I had to convert to plain json
  return JSON.parse(JSON.stringify(await getAllUsers(ammount, pageToken)));
}

export async function handleGetUserByUid(uid: string) {
  // Nextjs does not like .toJson() so I had to convert to plain json
  return JSON.parse(JSON.stringify(await getUserByUid(uid)));
}