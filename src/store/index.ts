import { Reducer, combineReducers } from "redux";
import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type AppAction = ActionType<typeof actions>;

export interface NavBarState {
  projectMenuAnchor: null | HTMLElement;
}

const initialState: NavBarState = {
  projectMenuAnchor: null
};

const navbarReducer: Reducer<NavBarState> = (
  state: NavBarState = initialState,
  action: AppAction
) => {
  switch (action.type) {
    case actions.OPEN_MENU:
      return { ...state, projectMenuAnchor: action.payload.anchor };

    case actions.CLOSE_MENU:
      return { ...state, projectMenuAnchor: null };
    default:
      return state;
  }
};

export interface BasicState {}

const basicReducer: Reducer<BasicState> = (state = {}, action: AppAction) => {
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
