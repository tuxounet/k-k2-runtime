import { IApiResult } from "../types/api/IApiResult";

export class Results {
  successApiResult(message: string, body?: unknown): IApiResult {
    return {
      statusCode: 200,
      body: body !== undefined ? JSON.stringify(body) : message,
    };
  }
}
