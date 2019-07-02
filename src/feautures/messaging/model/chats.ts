import { createEffect, createEvent, createStore } from "effector";
import { Chat } from "~/types/Chat";

type ChatUpdateData = {
	id: string;
	data: Chat;
};

type State = { [key: string]: Chat };

const mockChats: State = {
	1: {
		id: "1",
		messages: [],
		participants: []
	},
	2: {
		id: "2",
		messages: [],
		participants: []
	}
};

export const chatUpdated = createEvent<ChatUpdateData>();
export const fetchChats = createEffect<void, State, Error>().use(async () => mockChats);
export const $chats = createStore<State>({})
	.on(chatUpdated, (state, { data, id }) => ({ ...state, [id]: data }))
	.on(fetchChats.done, (_, { result }) => result);
