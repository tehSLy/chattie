import { createEvent, createStore } from "effector";
import { sampleFrom } from "~lib/effector/sampleFrom";
import { sendMessage } from ".";

export const messageChanged = createEvent<string>();
export const $currentMessage = createStore<string>("")
	.on(messageChanged, (_, msg) => msg)
	.reset(sendMessage);

export const sendCurrentMessage = sampleFrom($currentMessage, sendMessage);
