import { Participant } from "./Participant";

export type Chat = {
	messages: any[];
	participants: Participant[];
	id: string;
}