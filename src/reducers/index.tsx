import { combineReducers } from "redux";
import { OPEN_MENU, CLOSE_MENU } from "../actions";

const initialState = {
  projectMenuAnchor: null
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { ...state, projectMenuAnchor: action.anchor };

    case CLOSE_MENU:
      return { ...state, projectMenuAnchor: null };
    default:
      return state;
  }
};

function appReducer(state = {}, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}

export default combineReducers({ appReducer, navbarReducer });
