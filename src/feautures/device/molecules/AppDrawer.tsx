import { Drawer, List } from "@material-ui/core";
import { useStore } from "effector-react";
import * as React from "react";
import { DesktopMenuItem } from "../atoms/DesktopMenuItem";
import { ToggleThemeMenuItem } from "../atoms/ToggleThemeMenuItem";
import { $menuOpened, toggleMenu } from "../model/menu";
import { Add, ToggleOff } from "@material-ui/icons";

export const AppDrawer = () => {
	const open = useStore($menuOpened);

	return (
		<Drawer open={open} onClose={toggleMenu as any}>
			<List>
				<ToggleThemeMenuItem />
			</List>
		</Drawer>
	);
};
