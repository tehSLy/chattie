import { makeStyles, Paper } from "@material-ui/core";
import * as React from "react";
import { LayoutProps } from "./LayoutProps";
import { ActiveChatPanel } from "~feautures/messaging/molecules/ActiveChatPanel";

export const MobileLayout = ({ children }: LayoutProps) => {
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
