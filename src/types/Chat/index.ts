import { Participant } from "./Participant";
import { Message } from "../Message/Message";

export type Chat = {
	messages: Message[];
	participants: Participant[];
	id: string;
}