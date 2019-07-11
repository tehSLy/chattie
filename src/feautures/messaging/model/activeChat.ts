import { combine, createEvent, createStore } from "effector";
import { Chat } from "~/types/Chat";
import { Message } from "~/types/Message/Message";
import { sampleFrom_ } from "~lib/effector/sampleFrom";
import { message } from ".";
import { $chats, chatUpdated } from "./chats";

export const setActiveChat = createEvent<string>();

export const $activeChatId = createStore<string | null>("").on(setActiveChat, (_, id) => id);
export const $activeChat = combine($chats, $activeChatId, (chats, id) => (id && chats && chats[id] ? chats[id] : null));

export const $activeChatMessages = $activeChat.map((chat) => (chat ? chat.messages : []));

const [updateActiveChat, activeChatUpdated] = sampleFrom_($activeChatId, (id, data: Chat) => ({ data, id: id! }));
activeChatUpdated.watch(chatUpdated);

const [updateMessages, messagesUpdated] = sampleFrom_($activeChat, (chat, messages: Message[]) => ({
	...chat!,
	messages
}));
messagesUpdated.watch(updateActiveChat);

export const [pushMessage, messagePushed] = sampleFrom_($activeChatMessages, (messages, newMessage: Message) => [
	...messages,
	newMessage
]);
messagePushed.watch(updateMessages);

message.watch(({ data }) => pushMessage(data));
