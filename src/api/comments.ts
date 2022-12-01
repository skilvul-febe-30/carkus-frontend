import { store } from "../redux/store";
import type { ThreadComment } from "../types/ThreadComment";
import axios from "./axios";

export function createComment(campusId: string, threadId: string, comment: Pick<ThreadComment, "content">) {
  const token = store.getState().authState.token;
  return axios.post(`/campus/${campusId}/threads/${threadId}/comments`, comment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
