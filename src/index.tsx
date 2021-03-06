import * as React from "react";
import { render } from "react-dom";
import { GeneralLayout } from "~feautures/device/layouts/GeneralLayout";
import { fetchChats } from "~feautures/messaging/model/chats";
import { wsConnection } from "~feautures/common/wsConnection";

fetchChats();wsConnection

const target = document.createElement("div");
render(<GeneralLayout />, target);
document.body.appendChild(target);
