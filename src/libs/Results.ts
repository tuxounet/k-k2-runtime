import { IApiResult } from "../types/api/IApiResult";

export class Results {
  successApiResult(message?: string, body?: unknown): IApiResult {
    return {
      status: 200,
      message,
      body,
    };
  }
}
