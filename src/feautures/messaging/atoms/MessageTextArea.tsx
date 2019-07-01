import { InputBase, makeStyles } from "@material-ui/core";
import { createEvent } from "effector";
import { useStore } from "effector-react";
import * as React from "react";
import { $currentMessage, messageChanged, sendCurrentMessage } from "../model/currentMessage";

export const MessageTextArea = () => {
	const value = useStore($currentMessage);
	const cls = useStyles();

	return (
		<InputBase
			value={value}
			onChange={handleChange}
			placeholder="Write a message..."
			rowsMax={4}
			className={cls.input}
			onKeyUp={keyPressed}
		/>
	);
};

const useStyles = makeStyles((t) => ({
	input: {
		height: "1.1875em"
	}
}));

const handleChange = messageChanged.prepend<React.ChangeEvent<HTMLTextAreaElement>>(({ target: { value } }) => value);
const keyPressed = createEvent<React.KeyboardEvent>();
const enterPressed = keyPressed.filter({ fn: ({ key, shiftKey }) => key === "Enter" && !shiftKey });
enterPressed.watch(sendCurrentMessage);
