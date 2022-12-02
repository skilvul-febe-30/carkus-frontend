import { AxiosError } from "axios";

export function handleAuthError(err: unknown) {
  if (err instanceof AxiosError) {
    if (err.response?.status === 401) {
      location.href = "/logout";
    }
  }
}
