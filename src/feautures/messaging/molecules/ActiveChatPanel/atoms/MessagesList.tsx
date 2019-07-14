import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { $activeChatMessagesBlocks } from "~feautures/messaging/model/activeChatMessagesBlocks";
import { $activeChatMessages } from "../../../model/activeChat";
import { MessagesBlockSection } from "../molecules/MessagesBlockSection";

export const MessagesList = () => {
	const messages = useStore($activeChatMessages);
	const cls = useStyles();
	const blocks = useStore($activeChatMessagesBlocks);
	const wrapper = React.useRef<any>();

	const scrollToEnd = () => {
		if (wrapper.current) {
			wrapper.current.scrollTop = wrapper.current.scrollHeight;
		}
	};

	React.useEffect(() => scrollToEnd, [messages]);

	return (
		<Paper square elevation={0} className={cls.wrapper} ref={(el) => (wrapper.current = el)}>
			{messages.length ? (
				blocks.map((_, idx) => <MessagesBlockSection idx={idx} />)
			) : (
				<Typography variant="caption" color="textSecondary" className={cls.noMessages}>
					Нет сообщений
				</Typography>
			)}
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	wrapper: {
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		backgroundColor: t.palette.background.default,
		overflowY: "auto",
		height: "100%"
	},
	noMessages: {
		margin: "auto"
	}
}));
