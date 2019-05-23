import * as React from 'react'
import { LayoutProps } from './LayoutProps';
import Hidden from "@material-ui/core/Hidden";


export const MobileLayout = ({children}: LayoutProps) => <div>
	Mobile:
	{children}
</div>