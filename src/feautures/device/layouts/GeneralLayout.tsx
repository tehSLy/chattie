import { CssBaseline } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { useStore } from "effector-react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { $theme } from "~ui/model/theme";
import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileLayout";

export const GeneralLayout = () => {
	const theme = useStore($theme);
	return (
		<ThemeProvider theme={theme}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<Hidden smDown>
					<DesktopLayout />
				</Hidden>
				<Hidden smUp>
					<MobileLayout />
				</Hidden>
			</MuiThemeProvider>
		</ThemeProvider>
	);
};
