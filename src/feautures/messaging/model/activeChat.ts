import { combine, createEvent, createStore } from "effector";
import { Chat } from "~/types/Chat";
import { sampleFrom } from "~lib/effector/sampleFrom";
import { message } from ".";
import { $chats, chatUpdated } from "./chats";

export const setActiveChat = createEvent<string>();

export const $activeChatId = createStore<string | null>("").on(setActiveChat, (_, id) => id);
export const $activeChat = combine($chats, $activeChatId, (chats, id) => (id && chats && chats[id] ? chats[id] : null));

export const $activeChatMessages = $activeChat.map((chat) => (chat ? chat.messages : []));

const updateActiveChat = sampleFrom($activeChatId, (id, data: Chat) => (id ? chatUpdated({ data, id: id! }) : null));
const updateMessages = sampleFrom($activeChat, (chat, messages: any[]) => updateActiveChat({ ...chat, messages }));
export const pushMessage = sampleFrom($activeChatMessages, (messages, newMessage) =>
	updateMessages([...messages, newMessage])
);

message.watch(({ data }) => pushMessage(data));
