import { makeStyles, Paper } from "@material-ui/core";
import * as React from "react";
import { ActiveChatPanel } from "~feautures/messaging/molecules/ActiveChatPanel";

type Props = {
	children: React.ReactNode;
}

export const MobileLayout = ({ children }: Props) => {
	const cls = useStyles();
	return (
		<Paper className={cls.paper} elevation={0} square>
			<ActiveChatPanel />
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	paper: {
		width: "100vw",
		height: "100vh",
		display: "flex"
	}
}));
