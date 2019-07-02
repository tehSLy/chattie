import * as React from "react";
import { render } from "react-dom";
import { ChatPanel } from "~feautures/messaging/organisms/ChatPanel";
import { fetchChats } from "~feautures/messaging/model/chats";

fetchChats();

const target = document.createElement("div");
render(
	<div>
		<ChatPanel />
	</div>,
	target
);
document.body.appendChild(target);
