import { AxiosPromise, AxiosError } from "axios";

export function safeRequest<T>(
  api: (...args: any) => AxiosPromise<T>,
  ...args: any
): Promise<{ ok: boolean; data: T | AxiosError<T> }> {
  return api(...args)
    .then(response => {
      return { ok: true, data: response.data };
    })
    .catch(error => {
      return { ok: false, data: error };
    });
}
