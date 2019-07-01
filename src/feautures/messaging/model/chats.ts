import { createEffect, createEvent, createStore } from "effector";
import { Chat } from "~/types/Chat";

type ChatUpdateData = {
	id: string;
	data: Chat;
};

type State = { [key: string]: Chat };

export const chatUpdated = createEvent<ChatUpdateData>();
export const fetchChats = createEffect<void, State, Error>().use(async () => ({
	1: {
		messages: []
	},
	2: {
		messages: ["hello", "hii!"]
	}
}));
export const $chats = createStore<State>({})
	.on(chatUpdated, (state, { data, id }) => ({ ...state, [id]: data }))
	.on(fetchChats.done, (_, { result }) => result);
