export interface IApiRoute {
  auth: "NONE" | "COGNITO";
  path: string;
  method: "GET" | "POST";
  handler: string;
  description: string;
}
