import { createWebSocketConnection } from "~lib/createWebSocketConnection";

export const webSocketConnection = new WebSocket("wss://echo.websocket.org");
