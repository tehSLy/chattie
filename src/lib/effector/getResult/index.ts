import { mapResult } from "../mapResult";

export const getEventResult = <T>(_: T, v: T) => v;
export const getEffectResult = mapResult((data) => data);