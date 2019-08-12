import { makeStyles, Paper } from "@material-ui/core";
import { useStoreMap, useStore } from "effector-react";
import * as React from "react";
import { $activeChatMessagesBlocks } from "~feautures/messaging/model/activeChatMessagesBlocks";
import { MessageItem } from "../atoms/MessageItem";
import { $activeChat } from "~feautures/messaging/model/activeChat";

type Props = {
	idx: number;
	style?: any;
};

export const MessagesBlockSection = ({ idx, style }: Props) => {
	const cls = useStyles();
	const block = useStoreMap({
		store: $activeChatMessagesBlocks,
		keys: [idx],
		fn: (blocks) => blocks[idx]
	});

	const userVisible = useStore($userVisible);

	return (
		<div className={cls.wrapper} style={style}>
			{block.messages.map((message, id, all) => (
				<MessageItem message={message} key={id} withAuthor={id === 0 && userVisible} withTail={id === (all.length - 1)}/>
			))}
		</div>
	);
};

const $userVisible = $activeChat.map((chat) => chat ? chat.participants.length > 2 : false);


const useStyles = makeStyles((t) => ({
	wrapper: {
		display: "flex",
		flexDirection: "column",
		marginTop: t.spacing(1)
	},

}));
