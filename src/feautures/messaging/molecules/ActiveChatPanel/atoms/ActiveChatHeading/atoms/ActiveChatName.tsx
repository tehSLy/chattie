import * as React from 'react'
import { useStore } from 'effector-react';
import { $activeChatName } from '~feautures/messaging/model/activeChat';

export const ActiveChatName = () => {
	const name = useStore($activeChatName);

	return <>{name}</>
}