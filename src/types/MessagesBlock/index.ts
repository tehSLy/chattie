import { User } from "../User";
import { Message } from "../Message/Message";

export type MessagesBlock = {
	author: User;
	messages: Message[];
	isOwn: boolean;
}