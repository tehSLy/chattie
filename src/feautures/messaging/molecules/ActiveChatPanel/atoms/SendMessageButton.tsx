import { Send } from "@material-ui/icons";
import * as React from "react";
import { sampleFrom } from "~lib/effector/sampleFrom";
import { sendMessage } from "../../../model";
import { $currentMessage } from "../../../model/currentMessage";

export const SendMessageButton = () => <Send color="primary" onClick={submit} />;
const [submit, submitted] = sampleFrom($currentMessage);
submitted.watch(sendMessage);
