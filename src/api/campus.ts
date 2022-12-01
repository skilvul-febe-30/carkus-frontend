import { store } from "../redux/store";
import type { Campus } from "../types/Campus";
import axios from "./axios";

export function getCampus() {
  return axios.get(`/campus`);
}

export function getCampusById(id: string) {
  return axios.get(`/campus/${id}`);
}

export function updateCampus(id: string, campus: Partial<Campus>) {
  const token = store.getState().authState.token;
  return axios.put(`/campus/${id}`, campus, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
