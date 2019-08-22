import { createEffect, createEvent, createStore, restore } from "effector";

export const createWebSocketConnection = (url: string, retries = 5) => {
	const onEvent = createEvent<Event>();
	const statusChanged = onEvent.map(({ type }) => type);
	const message = createEvent<MessageEvent>();
	const send = createEffect();
	const $status = restore(statusChanged.filter({ fn: (status) => status === "close" || status === "open" }), "close");
	const error = onEvent.filter({fn: ({type}) => type === "error"})
	const retry = createEffect();
	const $retries = createStore(retries).on(retry, (s) => s - 1);

	const createInstance = () => {
		const instance = new WebSocket(url);
		statuses.forEach((key) => instance.addEventListener(key, onEvent));
		send.use((data) => instance.send(JSON.stringify(data)));
		instance.addEventListener("message", message);
		instance.addEventListener("close", retry);

		return () => {
			statuses.forEach((key) => instance.removeEventListener(key, onEvent));
			instance.removeEventListener("message", message);
			instance.removeEventListener("close", retry);
		};
	};

	let clearConnection = createInstance();

	$retries.watch((remaining) => retry.use(remaining > 0 ? () => (clearConnection = createInstance()) : () => null));
	retry.watch(clearConnection);

	return { $status, send, message, error };
};

const statuses: Array<keyof WebSocketEventMap> = ["close", "error", "open"];
