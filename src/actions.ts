export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const openMenu = (anchor: (element: HTMLElement) => HTMLElement) => ({
  type: OPEN_MENU,
  anchor: anchor
});

export const closeMenu = () => ({
  type: CLOSE_MENU
});
