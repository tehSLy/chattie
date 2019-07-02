import * as React from 'react'
import { createStore } from 'effector';
import { message } from '../model';
import { useStore } from 'effector-react';

export const LastMessage = () => {
	const message = useStore($lastMessage);
	return message;
}

const $lastMessage = createStore<any>(null)
	.on(message, (_, ev) => ev.data);