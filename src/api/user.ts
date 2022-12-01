import axios from "./axios";

export function getUsers() {
  return axios.get(`/users`);
}

export function getUserById(id: string) {
  return axios.get(`/users/${id}`);
}
