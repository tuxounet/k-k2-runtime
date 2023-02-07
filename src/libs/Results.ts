import { IApiResult } from "../types/api/IApiResult";
export enum ResultStatus {
  OK = 200,
  NOT_FOUND = 404,
}

export class Results {
  successApiResult(body?: unknown): IApiResult {
    return {
      statusCode: 200,
      body: body !== undefined ? JSON.stringify(body) : "",
    };
  }

  successFailureResult(code: ResultStatus, message?: string): IApiResult {
    return {
      statusCode: code,
      body: JSON.stringify({ reason: message }),
    };
  }
}
