import { createEffect, createEvent, createStore, Event as EffectorEvent } from "effector";

export const createWebSocketConnection = (url: string) => {
	const instance = new WebSocket(url);

	const sendMessage = createEffect<object, any, Error>().use((data) => instance.send(JSON.stringify(data)));
	const events = createEvents(instance);
	const status = createStore<keyof WebSocketEventMap>("close")
		.on(events.close, () => "close")
		.on(events.open, () => "open")
		.on(events.error, () => "error");

	return { sendMessage, instance, events, status };
};

const createEvents = (instance: WebSocket) => {
	return ["message", "error", "close", "open"].reduce((carry: any, key) => {
		const event = createEvent<Event>();
		instance.addEventListener(key, event);
		carry[key] = event;
		return carry;
	}, {}) as { [key in keyof WebSocketEventMap]: EffectorEvent<Event> };
};
