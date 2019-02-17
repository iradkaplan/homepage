import { Reducer, combineReducers } from "redux";
import { OPEN_MENU, CLOSE_MENU } from "../actions";

export interface NavBarState {
  projectMenuAnchor: null | ((element: HTMLElement) => HTMLElement);
}

const initialState: NavBarState = {
  projectMenuAnchor: null
};

const navbarReducer: Reducer<NavBarState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, projectMenuAnchor: action.anchor };

    case CLOSE_MENU:
      return { ...state, projectMenuAnchor: null };
    default:
      return state;
  }
};

export interface BasicState {}

const basicReducer: Reducer<BasicState> = (state = {}, action: any) => {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
};

export interface ApplicationState {
  basic: BasicState;
  navbar: NavBarState;
}

export default combineReducers<ApplicationState>({
  basic: basicReducer,
  navbar: navbarReducer
});
