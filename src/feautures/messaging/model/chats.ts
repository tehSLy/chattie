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
		messages: [{
			author: {
				id: "1",
				name: "Henry"
			},
			body: "oh hi mark!",
			attachments: []
		}],
		participants: [{id: "1", name: "Henry"}, {id: "1337", name: "Me"}]
	},
	2: {
		id: "2",
		messages: [],
		participants: [{id: "1", name: "Henry"}, {id: "2", name: "John Doe"}, {id: "1337", name: "Me"}],
		name: "Fellow guys"
	}
};

export const chatUpdated = createEvent<ChatUpdateData>();
export const fetchChats = createEffect<void, State, Error>().use(async () => mockChats);
export const $chats = createStore<State>({})
	.on(chatUpdated, (state, { data, id }) => ({ ...state, [id]: data }))
	.on(fetchChats.done, (_, { result }) => result);
