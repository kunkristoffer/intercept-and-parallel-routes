"use client";

import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "../config";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { iChatInbox, iChatMessage } from "@/types/firebase";
import { useEffect, useState } from "react";

// Init firebase client app, should only run on client
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export firebase modules
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

// Helper functions
export const isAutherized = () => auth.authStateReady();
export const getRole = () =>
  auth.currentUser
    ?.getIdTokenResult()
    .then((idTokenResult) => {
      console.log(idTokenResult.claims);
      return idTokenResult.claims;
    })
    .catch((error) => {
      console.log(error);
    });

export async function getMessages(
  chatID: string,
  max: number = 25
): Promise<iChatMessage[] | null> {
  if (typeof chatID !== "string" || chatID === "") return null;

  const colRef = collection(db, "messages", chatID, "messages");
  const q = query(colRef, orderBy("createdAt"), limit(max));
  const docs = await getDocs(q);
  const data = docs.docs.map((doc) => doc.data()) as iChatMessage[];
  return data;
}

export function getMessageQuery(chatID: string) {
  const colRef = collection(db, "messages", chatID, "messages");
  return query(colRef, orderBy("createdAt"));
}

export function useChatMessageSubscription(chatID: string) {
  const [messages, setMessages] = useState<iChatMessage[]>([]);

  useEffect(() => {
    const colRef = collection(db, "messages", chatID, "messages");
    const q = query(colRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshop) => {
      const data = snapshop.docs.map((doc) => doc.data()) as iChatMessage[];
      setMessages(data);
    });

    return () => unsubscribe();
  }, [chatID]);

  return messages;
}

export async function sendMessage(chatID: string, message: string) {
  // Verify user
  if (!auth.currentUser) return;

  // Write message into subcollection of chatID. Parent collection contains participants field
  const colRef = collection(db, "messages", chatID, "messages");
  await addDoc(colRef, {
    createdAt: new Date(),
    uid: auth.currentUser.uid,
    author: auth.currentUser.displayName,
    avatar: auth.currentUser.photoURL,
    text: message,
  }).catch((err) => {
    console.log(err);
  });
}

export async function getInbox() {
  const colRef = collection(db, "messages");
  const q = query(colRef);
  const docs = await getDocs(q);
  const data = docs.docs.map((doc) => doc.data()) as iChatInbox[];
  return data;
}
