import { InputBase, makeStyles } from "@material-ui/core";
import { createEvent } from "effector";
import { useStore } from "effector-react";
import * as React from "react";
import { sendMessage } from "../model";
import { $currentMessage, messageChanged, sendCurrentMessage } from "../model/currentMessage";
import { $activeChatId } from "../model/activeChat";

export const MessageTextArea = () => {
	const value = useStore($currentMessage);
	const cls = useStyles();
	const ref = React.useRef<HTMLInputElement>();
	const activeChat = useStore($activeChatId);

	const focus = () => ref.current && ref.current.focus();
	React.useEffect(() => sendMessage.watch(focus), []);
	React.useEffect(() => {
		focus();
	}, [activeChat]);

	return (
		<InputBase
			autoFocus
			inputComponent="textarea"
			inputProps={{
				className: cls.inputElement
			}}
			inputRef={(el) => (ref.current = el)}
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
		height: "1.1875em",
		fontSize: t.spacing(1.5),
		display: "flex",
		flexGrow: 1
	},
	inputElement: {
		resize: 'none',
	}
}));

const handleChange = messageChanged.prepend<React.ChangeEvent<HTMLTextAreaElement>>(({ target: { value } }) => value);
const keyPressed = createEvent<React.KeyboardEvent>();
const enterPressed = keyPressed.filter({ fn: ({ key, shiftKey }) => key === "Enter" && !shiftKey });
enterPressed.watch(sendCurrentMessage);
