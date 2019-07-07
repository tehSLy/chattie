import { Divider, makeStyles, Paper } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { ChatsList } from "../atoms/ChatsList/";
import { MessagesList } from "../atoms/MessagesList";
import { $activeChatId } from "../model/activeChat";
import { MessagePanel } from "../molecules/MessagePanel";
import { $chats } from "../model/chats";

export const ChatPanel = () => {
	const cls = useStyles();
	const activeId = useStore($activeChatId);

	return (
		<Paper className={cls.outerWrapper} square elevation={0}>
			<ChatsList />
			<Paper className={cls.innerWrapper} square elevation={0}>
				{activeId ? (
					<>
						<MessagesList />
						<Divider />
						<MessagePanel />
					</>
				) : (
					"Выберите чат"
				)}
			</Paper>
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	innerWrapper: {
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		justifyContent: "stretch"
	},
	outerWrapper: {
		display: "inline-flex",
		flexDirection: "row",
		border: `solid 1px ${t.palette.divider}`,
		flexGrow: 1
	}
}));
