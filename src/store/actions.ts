import { action } from "typesafe-actions";

export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const openMenu = (anchor: HTMLElement) =>
  action(OPEN_MENU, {
    anchor: anchor
  });

export const closeMenu = () => action(CLOSE_MENU);
