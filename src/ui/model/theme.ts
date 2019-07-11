import { createEvent, createStore } from "effector";
import { ThemeName, themes } from "~ui/atoms/themes";
import { getEventResult } from "~lib/effector/getResult";
import { sampleFrom_ } from "~lib/effector/sampleFrom";

const setTheme = createEvent<ThemeName>();

const $themeName = createStore<ThemeName>("light")
	.on(setTheme, getEventResult);

export const [toggleTheme, themeToggled] = sampleFrom_($themeName, (last) => last === "dark" ? "light" : "dark");
themeToggled.watch(setTheme);

export const $theme = $themeName.map((name) => themes[name]);
