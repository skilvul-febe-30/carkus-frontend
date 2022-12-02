import axios from "./axios";

export function login(username: string, password: string) {
  return axios.post(`/auth/login`, {
    username,
    password,
  });
}

export function register(username: string, password: string) {
  return axios.post(`/auth/register`, {
    username,
    password,
  });
}
