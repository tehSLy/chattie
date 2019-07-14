import { createMuiTheme } from "@material-ui/core";

const fontSize = 13;

export const themes = {
	light: createMuiTheme({
		typography: {
			fontSize
		}
	}),
	dark: createMuiTheme({
		palette: {
			type: "dark"
		},
		typography: {
			fontSize
		}
	})
};

export type ThemeName = keyof typeof themes;
