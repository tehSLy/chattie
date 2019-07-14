import { Participant } from "./Participant";
import { Message } from "../Message/Message";
import { User } from "../User";

export type Chat = {
	messages: Message[];
	participants: User[];
	id: string;
	name?: string;
}