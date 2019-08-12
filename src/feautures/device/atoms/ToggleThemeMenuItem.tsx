import { IconProps } from "@material-ui/core/Icon";
import { BrightnessLow, ToggleOff, ToggleOn } from "@material-ui/icons";
import { useStore } from "effector-react";
import * as React from "react";
import { $themeName, toggleTheme } from "~ui/model/theme";
import { DesktopMenuItem } from "./DesktopMenuItem";

export const ToggleThemeMenuItem = () => (
	<DesktopMenuItem actionIcon={ToggleIcon} caption="Toggle Theme" icon={BrightnessLow} onClick={toggleTheme} />
);

const ToggleIcon = (props: IconProps) => {
	const light = useStore($themeName) === "light";
	const Icon = light ? ToggleOff : ToggleOn;
	return <Icon {...props as any} />;
};
