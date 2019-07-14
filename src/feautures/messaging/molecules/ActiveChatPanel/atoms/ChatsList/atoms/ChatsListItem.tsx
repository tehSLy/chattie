import { Avatar, ButtonBase, makeStyles, Paper } from "@material-ui/core";
import { useStore, useStoreMap } from "effector-react";
import * as React from "react";
import { $activeChatId, setActiveChat } from "~feautures/messaging/model/activeChat";
import { $chats } from "~feautures/messaging/model/chats";
import { getChatName } from "~lib/chat";
import { $widthCollapsed } from "../model";
import { minWidth } from "../model/minWidth";
import { initials } from "~lib/initials";

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

	const name = React.useMemo(() => getChatName(chat), [chat]);
	const shortName = React.useMemo(() => initials(name), [name]);

	const collapsed = useStore($widthCollapsed);
	const active = useStore($activeChatId);
	const isActive = active === id;

	return (
		<Paper className={cls.wrapper} elevation={0} square>
			<ButtonBase className={isActive ? cls.buttonActive : cls.button} onClick={() => setActiveChat(id)}>
				<div className={cls.avatarWrapper}>
					<Avatar>{shortName}</Avatar>
				</div>
				{collapsed ? null : <div className={cls.chatData}>{name}</div>}
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
		display: "flex"
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
		flexGrow: 1,
		textAlign: "left"
	}
}));
