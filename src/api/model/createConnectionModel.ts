import { createEffect, createEvent, restore } from "effector";
import { Message } from "~/types/Message/Message";

type WSStatus = WebSocket["OPEN"] | WebSocket["CLOSED"] | WebSocket["CLOSING"] | WebSocket["CONNECTING"];

export const createConnectionModel = (connection: WebSocket) => {
	const statusChanged = createEvent<WSStatus>();
	const opened = statusChanged.prepend(() => WebSocket.OPEN);
	const closed = statusChanged.prepend(() => WebSocket.CLOSED);
	const message = createEvent<MessageEvent>();
	const error = createEvent<Event>();

	const $status = restore(statusChanged, WebSocket.CLOSED);
	const $open = $status.map((s) => s === WebSocket.OPEN);
	const $error = restore(error, null as any);
	
	const sendMessage = createEffect<string, void, Error>({
		handler: (s) => connection.send(s)
	});

	sendMessage.map

	const sendMessageFormatted = createEffect<Message, any, Error>({
		handler: (obj) => sendMessage(JSON.stringify(obj))
	});

	connection.addEventListener("open", opened);
	connection.addEventListener("error", error);
	connection.addEventListener("message", message);
	connection.addEventListener("close", closed);

	return {
		statusChanged,
		error,
		$error,
		$status,
		$open,
		message,
		sendMessage: sendMessageFormatted
	};
};
