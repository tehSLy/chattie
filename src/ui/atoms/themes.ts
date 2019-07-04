import { createMuiTheme } from "@material-ui/core";

export const themes = {
	light: createMuiTheme(),
	dark: createMuiTheme({
		palette: {
			type: "dark"
		}
	})
};

export type ThemeName = keyof typeof themes;
