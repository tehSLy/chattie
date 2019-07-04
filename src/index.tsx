import * as React from "react";
import { render } from "react-dom";
import { ChatPanel } from "~feautures/messaging/organisms/ChatPanel";
import { fetchChats } from "~feautures/messaging/model/chats";
import { GeneralLayout } from "~ui/layouts/GeneralLayout";

fetchChats();

const target = document.createElement("div");
render(
	<GeneralLayout>
		<ChatPanel />
	</GeneralLayout>,
	target
);
document.body.appendChild(target);
