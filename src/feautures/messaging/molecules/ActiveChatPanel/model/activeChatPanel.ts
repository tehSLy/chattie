import { createStore, createEvent } from "effector";
import { throttle } from "~lib/throttle";

export type WindowDimensions = {
	x: number;
	y: number;
}

const initial: WindowDimensions = {
	x: window.innerWidth,
	y: window.innerHeight
}

const resize = createEvent<any>();
window.addEventListener("resize", throttle(resize, 100));
export const $windowDimensions = createStore(initial)
	.on(resize, (_, e) => ({x: e.target!.innerWidth, y: e.target!.innerHeight}))

export const $windowHeight = $windowDimensions.map(({y}) => y);
export const $windowWidth = $windowDimensions.map(({x}) => x);
	
export const $splitMessagesSides = $windowWidth.map((w) => w < 1000);