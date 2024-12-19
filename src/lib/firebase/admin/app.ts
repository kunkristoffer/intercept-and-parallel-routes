import "server-only";
import { headers } from "next/headers";
import { initializeServerApp } from "firebase/app";
import { getAuth as getUserAuth } from "firebase/auth";
import { getAuth } from "firebase-admin/auth";
import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore, DocumentData } from "firebase-admin/firestore";
import { UserDetails } from "@/types/users";
import { firebaseConfig } from "../config";
import { validateEmail } from "@/utils/text";

// Helper function for Client/SSR cross-communication
export async function getAuthenticatedAppForUser() {
  // Read the HTTP incoming request headers from a Server Component.
  const headerList = await headers();
  const idToken = headerList.get("Authorization")?.split("Bearer ")[1];

  const firebaseServerApp = initializeServerApp(
    firebaseConfig,
    idToken ? { authIdToken: idToken } : {}
  );

  const auth = getUserAuth(firebaseServerApp);
  await auth.authStateReady();

  return { firebaseServerApp, currentUser: auth.currentUser };
}

// Init firebase admin sdk
const adminApp =
  getApps().length > 0
    ? getApp()
    : initializeApp({
        credential: cert({
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL,
          privateKey: JSON.parse(process.env.NEXT_FIREBASE_ADMIN_KEY!),
        }),
      });

export const adminAuth = getAuth(adminApp);
export const adminDB = getFirestore(adminApp);

// SSR generation of userprofile based on unique username
export async function profileLookup(
  username: string
): Promise<UserDetails | DocumentData | undefined> {
  const userRef = adminDB
    .collection("profiles")
    .where("username", "==", username.toLowerCase());
  return await userRef.get().then((querySnapshot) => {
    if (!querySnapshot.empty) return querySnapshot.docs[0].data();
  });
}

export async function newsletterSignup(email: string) {
  // Validate that arg is a valid email address
  if (!email || !validateEmail(email)) return;

  adminDB
    .collection("newsletter_recipients")
    .add({
      to: email,
      message: {
        subject: "Hello from Firebase!",
        text: "This is the plaintext section of the email body.",
        html: "This is the <code>HTML</code> section of the email body.",
      },
    })
    .then(() => console.log("Queued email for delivery to: " + email));
}

// Grant a role to a user
export async function grantRole(email: string, role?: string): Promise<void> {
  const user = await adminAuth.getUserByEmail(email);
  const existingClaims = user.customClaims ?? {};

  return adminAuth.setCustomUserClaims(user.uid, {
    ...existingClaims,
    roles: role ? { [role]: true } : {},
  });
}

// Get roles for a user
export async function getRole(
  email: string
): Promise<{ roles: { [key: string]: boolean } }> {
  const user = await adminAuth.getUserByEmail(email);
  return user.customClaims?.roles ?? null;
}

// Get a list of all users
export async function getAllUsers(ammount: number = 100, pageToken?: string) {
  return await adminAuth.listUsers(ammount, pageToken);
}

// Find a specific user based on UID, if none exists, returns null
export async function getUserByUid(uid: string) {
  try {
    return await adminAuth.getUser(uid);
  } catch {
    return null;
  }
}
