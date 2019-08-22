import { Avatar, ButtonBase, makeStyles, Paper } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { $chats } from "~feautures/messaging/model/chats";
import { $width, $widthCollapsed, mouseEvent, mouseMove } from "./model";
import { ChatsListItem } from "./atoms/ChatsListItem";
import { ConnectionPopup } from "~feautures/common/atoms/ConnectionPopup";

export const ChatsList = () => {
	const chats = useStore($chats);
	const cls = useStyles();
	const width = useStore($width);
	const collapsed = useStore($widthCollapsed);

	return (
		<div className={cls.wrapper}>
			<div className={collapsed ? cls.chatsCollapsed : cls.chatsWrapper}  style={{ width }}>
				{Object.keys(chats).map((key) => (
					<ChatsListItem id={key}/>
				))}
			</div>
			<ConnectionPopup />
		</div>
	);
};


const useStyles = makeStyles((t) => ({
	wrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center"
	},
	button: {
		borderRadius: "50%",
		marginTop: t.spacing(1)
	},
	verticalDivider: {
		// borderLeft: `1px solid ${t.palette.divider}`,
		borderRight: `1px solid ${t.palette.divider}`,
		marginLeft: "-4px",
		width: "4px",
		cursor: "col-resize",
		userSelect: "none",
	},
	chatsWrapper: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "flex-start",
		maxHeight: "100vh",
	},
	chatsCollapsed: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		maxHeight: "100vh"
	}
}));
