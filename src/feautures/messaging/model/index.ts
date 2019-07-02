import { createEffect, createEvent } from "effector";
import { MessageEvent } from "~/types/Message/MessageEvent";
import { webSocketConnection } from "~api/webSocket";

export const sendMessage = createEffect<any, any, Error>().use((data) => webSocketConnection.send(data));
export const message = createEvent<MessageEvent<any>>();

webSocketConnection.onmessage = message;
