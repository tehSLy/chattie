import { Attachment } from "../Attachment";
import { User } from "../User";

export type Message = {
	author: User;
	body: string;
	attachments: Attachment[];
};