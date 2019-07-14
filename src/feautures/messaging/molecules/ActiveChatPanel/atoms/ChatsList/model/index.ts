import { createEvent, createStore, sample } from "effector";
import { clamp } from "ramda";
import { createCache } from "~lib/createCache";
import { minWidth } from "./minWidth";

const widthCache = createCache<number>("chat_width");

export const mouseMove = createEvent<MouseEvent>();
export const mouseEvent = createEvent<MouseEvent>();
const $isDragging = createStore(false).on(mouseEvent, (_, e) => (e.type === "mouseup" ? false : true));

let interval: any;
$isDragging.watch((state) => (interval = state ? setInterval(clock, 1000 / 50) : clearInterval(interval)));

const clock = createEvent();
const dragged = sample(mouseMove, clock, (e) => e.screenX);
export const $width = createStore(widthCache.get(100)).on(dragged, (_, w) => (w < 150 ? minWidth : clamp(250, 5000, w)));
$width.updates.watch(widthCache.set);

export const $widthCollapsed = $width.map((w) => w === minWidth)