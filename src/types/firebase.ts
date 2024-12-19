import { Timestamp } from "firebase/firestore";

export interface iChatMessage {
  createdAt: Timestamp;
  uid?: string;
  author: string;
  avatar: string;
  text: string;
  fromMe?: boolean;
  editedAt?: Timestamp;
  edited?: boolean;
}

export interface iChatInbox {
  participants: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  chatId: string;
}
