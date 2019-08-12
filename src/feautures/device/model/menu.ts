import { createEvent, restore } from "effector";
import { sampleTo } from "~lib/effector/sampleTo";

const setMenu = createEvent<boolean>();
export const $menuOpened = restore(setMenu, false);

export const closeMenu = setMenu.prepend(() => false);
export const openMenu = setMenu.prepend(() => true);
export const toggleMenu = sampleTo($menuOpened, (open) => !open, setMenu);
