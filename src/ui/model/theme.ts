import { createEvent, createStore } from "effector";
import { ThemeName, themes } from "~ui/atoms/themes";
import { getEventResult } from "~lib/effector/getResult";
import { sampleFrom } from "~lib/effector/sampleFrom";

const setTheme = createEvent<ThemeName>();

const $themeName = createStore<ThemeName>("light")
	.on(setTheme, getEventResult);

export const toggleTheme = sampleFrom($themeName, (last) => setTheme(last === "dark" ? "light" : "dark"));
export const $theme = $themeName.map((name) => themes[name]);
