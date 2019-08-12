import { makeStyles, Paper } from "@material-ui/core";
import * as React from "react";

type Props = {
	children: React.ReactNode;
};

export const TabletLayout = ({ children }: Props) => {
	const cls = useStyles();
	return (
		<Paper className={cls.paper} elevation={0} square>
			{children}
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
