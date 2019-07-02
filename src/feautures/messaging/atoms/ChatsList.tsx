import { Avatar, ButtonBase, makeStyles } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { setActiveChat } from "../model/activeChat";
import { $chats } from "../model/chats";

export const ChatsList = () => {
	const chats = useStore($chats);
	const cls = useStyles();
	return (
		<div className={cls.wrapper}>
			{Object.keys(chats).map((key) => (
				<ButtonBase className={cls.button} onClick={() => setActiveChat(key)}>
					<Avatar>{key}</Avatar>
				</ButtonBase>
			))}
		</div>
	);
};

const useStyles = makeStyles((t) => ({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		padding: t.spacing(1)
	},
	button: {
		borderRadius: "50%"
	}
}));
