import { wsConnection } from "..";
import { createConnectionModel } from "./createConnectionModel";

export const connectionModel = createConnectionModel(wsConnection);