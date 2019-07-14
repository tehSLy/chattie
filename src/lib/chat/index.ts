import { Chat } from "~/types/Chat";

export const getChatName = (chat: Chat) => {
	try {
		if (chat.name) {
			return chat.name;
		}

		return chat.participants[0].name;
	} catch (error) {
		console.warn(error);
		return "";
	}
};

export const getChatTitle = (chat: Chat) => {
	try {
		const { length } = chat.participants;
		return length > 2 ? `${length} users` : "last seen recently";
	} catch (error) {
		console.warn(error);
		return "";
	}
};


