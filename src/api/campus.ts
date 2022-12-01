import axios from "./axios";

export function getCampus() {
  return axios.get(`/campus`);
}

export function getCampusById(id: string) {
  return axios.get(`/campus/${id}`);
}
