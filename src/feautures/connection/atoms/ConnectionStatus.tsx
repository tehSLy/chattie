import * as React from 'react'
import {useStore} from "effector-react"
import { $connectionStatus } from '../model';

export const ConnectionStatus = () => {
	const status = useStore($connectionStatus);

	return <div>{status}</div>
}