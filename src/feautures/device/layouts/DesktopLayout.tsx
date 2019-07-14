import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { ActiveChatPanel } from "~feautures/messaging/molecules/ActiveChatPanel";
import { ChatsList } from "~feautures/messaging/molecules/ActiveChatPanel/atoms/ChatsList";
import { mouseEvent, mouseMove, $width } from "~feautures/messaging/molecules/ActiveChatPanel/atoms/ChatsList/model";
import { DesktopHeader } from "../atoms/DesktopHeader";

export const DesktopLayout = () => {
	const cls = useStyles();
	React.useEffect(() => {
		document.addEventListener("mouseup", mouseEvent);
		document.addEventListener("mousemove", mouseMove);
		return () => {
			document.removeEventListener("mouseup", mouseEvent);
			document.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<Paper className={cls.paper} elevation={0} square>
			<div className={cls.block}>
				<DesktopHeader />
				<ChatsList />
			</div>
			<div className={cls.verticalDivider} onMouseDown={mouseEvent} />
			<ActiveChatPanel />
		</Paper>
	);
};

const useStyles = makeStyles((t) => ({
	paper: {
		width: "100vw",
		height: "100vh",
		display: "flex"
	},
	block: {
		display: "flex",
		flexDirection: "column"
	},
	verticalDivider: {
		// borderLeft: `1px solid ${t.palette.divider}`,
		borderRight: `1px solid ${t.palette.divider}`,
		marginLeft: "-4px",
		width: "4px",
		cursor: "col-resize",
		userSelect: "none",
		zIndex: 6
	}
}));
