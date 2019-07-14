import { makeStyles, Paper } from "@material-ui/core";
import * as React from "react";
import { LayoutProps } from "./LayoutProps";

export const TabletLayout = ({ children }: LayoutProps) => {
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
