import { createEvent, createStore } from "effector";
import { webSocketConnection } from "~api/webSocket";

export const statusChanged = createEvent<Event>().filter({
	fn: ({ type }) => type !== "message"
});

export const error = createEvent<Event>();

export const $connectionStatus = createStore<keyof WebSocketEventMap>("close").on(
	statusChanged,
	(_, { type }) => type as any
);

webSocketConnection.onopen = statusChanged;
webSocketConnection.onclose = statusChanged;
webSocketConnection.onerror = error;
