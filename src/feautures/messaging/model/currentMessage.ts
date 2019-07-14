import { createEvent, createStore } from "effector";
import { sampleFrom } from "~lib/effector/sampleFrom";
import { sendMessage } from ".";

export const messageChanged = createEvent<string>();
export const $currentMessage = createStore<string>("")
	.on(messageChanged, (_, msg) => msg)
	.reset(sendMessage);

export const [sendCurrentMessage, currentMessageSubmitted] = sampleFrom($currentMessage, (msg) => msg.trim());
currentMessageSubmitted.filter({fn: (msg) => Boolean(msg)}).watch(sendMessage);
