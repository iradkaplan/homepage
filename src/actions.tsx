export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

export const openMenu = (anchor: any) => ({
  type: OPEN_MENU,
  anchor: anchor
});

export const closeMenu = () => ({
  type: CLOSE_MENU
});