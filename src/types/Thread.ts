import type { ThreadComment } from "./ThreadComment";

export interface Thread {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  comments: ThreadComment[];
}
