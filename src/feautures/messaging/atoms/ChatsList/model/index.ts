import { createEvent, createStore, sample } from "effector";
import { clamp } from "ramda";
import { createCache } from "~lib/createCache";

const widthCache = createCache<number>("chat_width");

export const mouseMove = createEvent<MouseEvent>();
export const mouseEvent = createEvent<MouseEvent>();
const $isDragging = createStore(false).on(mouseEvent, (_, e) => (e.type === "mouseup" ? false : true));

let interval: any;
$isDragging.watch((state) => (interval = state ? setInterval(clock, 1000 / 50) : clearInterval(interval)));

const clock = createEvent();
const dragged = sample(mouseMove, clock, (e) => e.clientX);
export const $width = createStore(widthCache.get() || 100).on(dragged, (_, w) => clamp(50, 300, w));
$width.updates.watch(widthCache.set);
