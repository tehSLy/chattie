import { Avatar, ButtonBase, makeStyles } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { setActiveChat } from "../model/activeChat";
import { $chats } from "../model/chats";
import { $width, mouseEvent, mouseMove } from "./ChatsList/model";

export const ChatsList = () => {
	const chats = useStore($chats);
	const cls = useStyles();
	const width = useStore($width);
	// const active = useStore($activeChatId);

	React.useEffect(() => {
		document.addEventListener("mouseup", mouseEvent);
		document.addEventListener("mousemove", mouseMove);
		return () => {
			document.removeEventListener("mouseup", mouseEvent);
			document.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<div className={cls.wrapper} style={{ width }}>
			<div className={cls.chatsWrapper}>
				{Object.keys(chats).map((key) => (
					<ButtonBase className={cls.button} onClick={() => setActiveChat(key)} color="red">
						<Avatar>{key}</Avatar>
					</ButtonBase>
				))}
			</div>
			<div className={cls.verticalDivider} onMouseDown={mouseEvent} />
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
		borderLeft: `1px solid ${t.palette.divider}`,
		borderRight: `1px solid ${t.palette.divider}`,
		width: "4px",
		cursor: "col-resize",
		userSelect: "none",
		marginLeft: "auto"
	},
	chatsWrapper: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		alignItems: "center",
		maxHeight: "100vh"
	}
}));
