import { ListItem, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

type Props = {
	caption: string;
	icon: React.ComponentType<any>;
	actionIcon?: React.ComponentType<any>;
	onClick?(e: React.MouseEvent): void;
};

export const DesktopMenuItem = ({ actionIcon: ActionIcon, caption, icon: Icon, onClick }: Props) => {
	const cls = useStyles();

	return (
		<ListItem className={cls.wrapper} button onClick={onClick} dense>
			<Icon className={cls.icon} />
			<Typography className={cls.typo}>{caption}</Typography>
			{ActionIcon ? <ActionIcon className={cls.action}/> : null}
		</ListItem>
	);
};

const useStyles = makeStyles((t) => ({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "3em 1fr 3em",
		justifyContent: "center",
		minWidth: t.spacing(35)
	},
	action: {
		fontSize: "3em"
	},
	typo: {
		padding: t.spacing(1, 0)
	},
	icon: {
		justifySelf: "center"
	}
}));
