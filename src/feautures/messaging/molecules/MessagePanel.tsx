import { Paper, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { MessageTextArea } from './ActiveChatPanel/atoms/MessageTextArea';
import { SendMessageButton } from './ActiveChatPanel/atoms/SendMessageButton';

export const MessagePanel = () => {
	const cls = useStyles();

	return (
		<Paper className={cls.innerWrapper} square elevation={0}>
			<MessageTextArea />
			<SendMessageButton />
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	innerWrapper: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: t.spacing(1, 2)
	}
}))
