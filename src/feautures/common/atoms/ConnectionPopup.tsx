import { makeStyles, Paper } from "@material-ui/core";
import { useStore, useStoreMap } from "effector-react";
import React from "react";
import { $width } from "~feautures/messaging/molecules/ActiveChatPanel/atoms/ChatsList/model";
import { wsConnection } from "../wsConnection";

export const ConnectionPopup = () => {
	const displayed = useStoreMap({
		store: wsConnection.$status,
		keys: [],
		fn: () => status === "close"
	});
	const width = useStore($width);

	const cls = useStyles();

	return displayed ? (
		<Paper square style={{ width: width - 1 }} className={cls.statusWrapper}>
			Connecting...
		</Paper>
	) : null;
};

const useStyles = makeStyles((t) => ({
	statusWrapper: {
		position: "fixed",
		left: 0,
		bottom: 0,
		padding: t.spacing(1)
	}
}));
