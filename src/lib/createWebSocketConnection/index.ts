import { createEffect, createEvent, createStore, Event as EffectorEvent } from "effector";

export const createWebSocketConnection = (url: string) => {
	const instance = new WebSocket(url);

	const sendMessage = createEffect<object, any, Error>().use((data) => instance.send(JSON.stringify(data)));
	const statusChanged = createEvents(instance);
	const status = restore(statusChanged, "close");

	return { sendMessage, instance, statusChanged, status };
};

const createEvents = (instance: WebSocket) => {
	const event = createEvent<Event>();
	return ["message", "error", "close", "open"].map((key) => instance.addEventListener(key, event));
};
