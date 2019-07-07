import { makeStyles, Paper, Avatar, ButtonBase } from "@material-ui/core";
import { useStoreMap, useStore } from "effector-react";
import * as React from "react";
import { $chats } from "~feautures/messaging/model/chats";
import { minWidth } from "../model/minWidth";
import { $widthCollapsed } from "../model";
import { $activeChatId, setActiveChat } from "~feautures/messaging/model/activeChat";

type Props = {
	id: string;
};
export const ChatsListItem = ({ id }: Props) => {
	const cls = useStyles();
	const chat = useStoreMap({
		store: $chats,
		keys: [id],
		fn: (chats, [id]) => chats[id]
	});
	const collapsed = useStore($widthCollapsed);
	const active = useStore($activeChatId)
	const isActive = active === id;

	return (
		<Paper className={cls.wrapper} elevation={0} square>
			<ButtonBase className={isActive ? cls.buttonActive : cls.button} onClick={() => setActiveChat(id)} >
			<div className={cls.avatarWrapper}>
				<Avatar>{chat.id}</Avatar>
			</div>
			{collapsed ? null : <div className={cls.chatData}>
				Helo there!
			</div>}
			</ButtonBase>
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	avatarWrapper: {
		width: minWidth,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	
	},
	wrapper: {
		height: minWidth,
		width: "100%",
		display: "flex",
		// alignItems: "stretch"
	},
	button: {
		display: "flex",
		flexGrow: 1
	},
	buttonActive: {
		display: "flex",
		flexGrow: 1,
		backgroundColor: t.palette.primary.light
	},
	chatData: {
		flexGrow: 1
	}
}));
