import { IconButton, InputBase, makeStyles, TextField } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useStore } from "effector-react";
import * as React from "react";
import { $widthCollapsed } from "~feautures/messaging/molecules/ActiveChatPanel/atoms/ChatsList/model";
import { toggleMenu } from "../model/menu";

export const DesktopHeader = () => {
	const cls = useStyles();
	const collapsed = useStore($widthCollapsed);

	return (
		<div className={cls.wrapper}>
			<IconButton size="medium" onClick={toggleMenu}>
				<Menu />
			</IconButton>
			{collapsed ? null : <InputBase className={cls.input} placeholder="Search" />}
		</div>
	);
};

const useStyles = makeStyles((t) => ({
	input: {
		borderRadius: t.spacing(0.5),
		backgroundColor: t.palette.grey[300],
		padding: t.spacing(0, 1),
		fontSize: t.typography.subtitle1.fontSize,
		fontFamily: t.typography.fontFamily,
		flexGrow: 1,
		color: "initial"
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
		paddingRight: t.spacing(1)
	}
}));
