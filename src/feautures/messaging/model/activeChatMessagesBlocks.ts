import { $activeChatMessages } from "./activeChat";
import { MessagesBlock } from "~/types/MessagesBlock";
import last from "ramda/es/last";
import { combine } from "effector";
import { $currentUser } from "~feautures/profile/model";

export const $activeChatMessagesBlocks = combine($activeChatMessages, $currentUser, (messages, user) => ({messages, user})).map(({messages, user}) =>
	messages.reduce(
		(blocks, message) => {
			const lastBlock = last(blocks);
			if (lastBlock) {
				const lastMessage = last(lastBlock!.messages);
				const lastAuthorId = lastMessage!.author.id;

				if (message.author.id === lastAuthorId) {
					lastBlock!.messages.push(message);
					return blocks;
				}
			}

			blocks.push({
				author: message.author,
				messages: [message],
				isOwn: message.author.id === user.id
			});

			return blocks;
		},
		[] as MessagesBlock[]
	)
);