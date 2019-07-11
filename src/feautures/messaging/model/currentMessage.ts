import { createEvent, createStore } from "effector";
import { sampleFrom_ } from "~lib/effector/sampleFrom";
import { sendMessage } from ".";

export const messageChanged = createEvent<string>();
export const $currentMessage = createStore<string>("")
	.on(messageChanged, (_, msg) => msg)
	.reset(sendMessage);

export const [sendCurrentMessage, currentMessageSubmitted] = sampleFrom_($currentMessage, (msg) => msg);
currentMessageSubmitted.watch(sendMessage);
