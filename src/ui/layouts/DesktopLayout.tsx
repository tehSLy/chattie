import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { LayoutProps } from "./LayoutProps";

export const DesktopLayout = ({ children }: LayoutProps) => {
	const cls = useStyles();

	return <Paper className={cls.paper} elevation={0} square>{children}</Paper>;
};

const useStyles = makeStyles((t) => ({
	paper: {
		width: "100vw",
		height: "100vh"
	}
}));
