import { Divider, Paper, Typography, Chip, makeStyles } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";
import { MessagePanel } from "../MessagePanel";
import { ActiveChatHeading } from "./atoms/ActiveChatHeading";
import { MessagesList } from "./atoms/MessagesList";
import { useStore } from "effector-react";
import { $activeChatId } from "~feautures/messaging/model/activeChat";

export const ActiveChatPanel = () => {
	const cls = useStyles();
	const activeId = useStore($activeChatId);
	return (
		<Paper className={cls.innerWrapper} square elevation={0}>
			{activeId ? (
				<Wrapper>
					<ActiveChatHeading />
					<MessagesList />
					<Divider />
					<MessagePanel />
				</Wrapper>
			) : (
				<Chip className={cls.selectChat} label={<Typography>Выберите чат</Typography>} />
			)}
		</Paper>
	);
};

const Wrapper = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;

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
		flexGrow: 1
	},
	selectChat: {
		margin: "auto"
	}
}));
