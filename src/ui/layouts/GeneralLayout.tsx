import * as React from "react";
import { LayoutProps } from "./LayoutProps";
import Hidden from "@material-ui/core/Hidden";
import { TabletLayout } from "./TabletLayout";
import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileLayout";

export const GeneralLayout = ({ children }: LayoutProps) => (
	<>
		<Hidden only="md">
			<TabletLayout>{children}</TabletLayout>
		</Hidden>
		<Hidden lgUp>
			<DesktopLayout>{children}</DesktopLayout>
		</Hidden>
		<Hidden smDown>
			<MobileLayout>{children}</MobileLayout>
		</Hidden>
	</>
);
