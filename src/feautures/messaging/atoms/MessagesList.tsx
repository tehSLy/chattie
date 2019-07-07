import { makeStyles, Paper, Typography } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { $activeChatMessages } from "../model/activeChat";

export const MessagesList = () => {
	const messages = useStore($activeChatMessages);
	const cls = useStyles();

	return (
		<Paper square elevation={0} className={cls.wrapper}>
			{messages.length ? (
				messages.map((message) => <Paper className={cls.message} elevation={2}>{message}</Paper>)
			) : (
				<Typography variant="caption" color="textSecondary">
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
		flexDirection: "column"
	},
	message: {
		margin: t.spacing(0.5),
		alignSelf: "start",
		padding: t.spacing(1)
	}
}));
