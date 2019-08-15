import { Avatar, makeStyles, Paper, Typography } from "@material-ui/core";
import { useStore, useStoreMap } from "effector-react";
import * as React from "react";
import { Message } from "~/types/Message/Message";
import { $currentUser } from "~feautures/profile/model";
import { initials } from "~lib/initials";
import { $splitMessagesSides } from "../../model/activeChatPanel";

type Props = {
	message: Message;
	withAuthor: boolean;
	withTail: boolean;
};

export const MessageItem = ({ message, withAuthor, withTail }: Props) => {
	const cls = useStyles();
	const isOwn = useStoreMap({
		store: $currentUser,
		keys: [message.author.id],
		fn: (user, [id]) => user.id === id
	});

	const splitMessagesSides = useStore($splitMessagesSides);
	const stickRight = splitMessagesSides ? isOwn : false;
	
	return (
		<div className={[cls.wrapper, stickRight ? cls.own : cls.other, !splitMessagesSides ? cls.withAvatar : ""].join(" ")}>
			{!splitMessagesSides && withTail ? <Avatar>{initials(message.author.name)}</Avatar> : <div />}
			<Paper className={cls.messageWrapper}>
				{withAuthor ? (
					<div>
						<Typography variant="subtitle2" className={cls.author}>
							{message.author.name}
						</Typography>
					</div>
				) : null}
				<Typography variant="body2" className={cls.message}>{message.body}</Typography>
			</Paper>
		</div>
	);
};

const useStyles = makeStyles((t) => ({
	wrapper: {
		alignSelf: "start",
		marginLeft: t.spacing(1),
		display: "flex"
	},
	own: {
		marginLeft: "auto"
		// marginRight: "auto"
	},
	other: {
		marginRight: "auto"
	},
	author: {
		fontWeight: t.typography.fontWeightBold
	},
	messageWrapper: {
		padding: t.spacing(1),
		margin: t.spacing(0.2, 1)
	},
	withAvatar: {
		display: "grid",
		gridTemplateColumns: "3em 1fr",
		alignItems: "end"
	},
	message: {
		wordBreak: "break-word"
	}
}));
