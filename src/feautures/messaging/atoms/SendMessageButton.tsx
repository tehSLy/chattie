import Button from "@material-ui/core/Button";
import * as React from "react";
import { sampleFrom, sampleFrom_ } from "~lib/effector/sampleFrom";
import { sendMessage } from "../model";
import { $currentMessage } from "../model/currentMessage";
import { IconButton } from "@material-ui/core";
import {Send} from "@material-ui/icons"

export const SendMessageButton = () => <Send color="primary" onClick={submit}/>;
const [submit, submitted] = sampleFrom_($currentMessage);
submitted.watch(sendMessage)