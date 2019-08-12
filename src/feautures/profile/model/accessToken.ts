import { createEvent, restore } from "effector";

export const setAccessToken = createEvent<string>();
export const $accessToken = restore(setAccessToken, "");