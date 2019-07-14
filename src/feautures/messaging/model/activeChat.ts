import { combine, createEvent, createStore, sample } from "effector";
import { Chat } from "~/types/Chat";
import { Message } from "~/types/Message/Message";
import { getChatName, getChatTitle } from "~lib/chat";
import { sampleFrom } from "~lib/effector/sampleFrom";
import { message, sendMessage } from ".";
import { $chats, chatUpdated } from "./chats";
import { $currentUser } from "~feautures/profile/model";

export const setActiveChat = createEvent<string>();

export const $activeChatId = createStore<string | null>("").on(setActiveChat, (_, id) => id);
export const $activeChat = combine($chats, $activeChatId, (chats, id) => (id && chats && chats[id] ? chats[id] : null));

export const $activeChatName = $activeChat.map((chat) => (chat ? getChatName(chat) : ""));
export const $activeChatTitle = $activeChat.map((chat) => (chat ? getChatTitle(chat) : ""));

export const $activeChatMessages = $activeChat.map((chat) => (chat ? chat.messages : []));

const [updateActiveChat, activeChatUpdated] = sampleFrom($activeChatId, (id, data: Chat) => ({ data, id: id! }));
activeChatUpdated.watch(chatUpdated);

const [updateMessages, messagesUpdated] = sampleFrom($activeChat, (chat, messages: Message[]) => ({
	...chat!,
	messages
}));
messagesUpdated.watch(updateActiveChat);

export const [pushMessage, messagePushed] = sampleFrom($activeChatMessages, (messages, newMessage: Message) => [
	...messages,
	newMessage
]);
messagePushed.watch(updateMessages);

message.watch(({ data }) =>
	Math.round(Math.random()) ? pushMessage({
		attachments: [],
		author: { id: "1", name: "Henry" },
		body: data
	}) : null
);

const ownerMessageSent = sample($currentUser, sendMessage, (author, body): Message => ({
	attachments: [],
	author,
	body
}));
ownerMessageSent.watch(pushMessage)
