import { IApiRequest } from "./IApiRequest";
import { IApiResult } from "./IApiResult";

export type IApiHandler = (request: IApiRequest) => Promise<IApiResult>;
