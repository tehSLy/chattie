import { createWebSocketConnection } from "./createWebSocketConnection";

export const wsConnection = createWebSocketConnection(process.env.WS_URL!);
console.log({wsConnection});