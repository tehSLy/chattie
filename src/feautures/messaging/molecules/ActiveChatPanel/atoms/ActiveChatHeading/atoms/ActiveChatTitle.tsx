import * as React from 'react'
import { useStore } from 'effector-react';
import { $activeChatTitle } from '~feautures/messaging/model/activeChat';

export const ActiveChatTitle = () => {
	const title = useStore($activeChatTitle);

	return <>{title}</>
}