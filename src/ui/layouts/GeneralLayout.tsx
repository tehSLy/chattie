import Hidden from "@material-ui/core/Hidden";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { useStore } from "effector-react";
import * as React from "react";
import { $theme } from "~ui/model/theme";
import { DesktopLayout } from "./DesktopLayout";
import { LayoutProps } from "./LayoutProps";
import { MobileLayout } from "./MobileLayout";
import { TabletLayout } from "./TabletLayout";
import { CssBaseline } from "@material-ui/core";

export const GeneralLayout = ({ children }: LayoutProps) => {
	const theme = useStore($theme);
	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Hidden mdDown mdUp>
				<TabletLayout>{children}</TabletLayout>
			</Hidden>
			<Hidden lgDown>
				<DesktopLayout>{children}</DesktopLayout>
			</Hidden>
			<Hidden smUp>
				<MobileLayout>{children}</MobileLayout>
			</Hidden>
		</MuiThemeProvider>
	);
};
