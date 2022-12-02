import { store } from "../redux/store";
import type { Thread } from "../types/Thread";
import axios from "./axios";

export function getThreads(campusId: string) {
  return axios.get(`/campus/${campusId}/threads`);
}

export function getThreadById(campusId: string, threadId: string) {
  return axios.get(`/campus/${campusId}/threads/${threadId}`);
}

export function createThread(campusId: string, thread: Pick<Thread, "title" | "content">) {
  const token = store.getState().authState.token;
  return axios.post(`/campus/${campusId}/threads`, thread, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updateThread(campusId: string, threadId: string, thread: Partial<Thread>) {
  const token = store.getState().authState.token;
  return axios.put(`/campus/${campusId}/threads/${threadId}`, thread, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function deleteThread(campusId: string, threadId: string) {
  const token = store.getState().authState.token;
  return axios.delete(`/campus/${campusId}/threads/${threadId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
