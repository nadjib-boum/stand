import type { AxiosError } from "axios";

type APIErrorData = {
  code: string;
};

export type APIError = AxiosError<APIErrorData>;
