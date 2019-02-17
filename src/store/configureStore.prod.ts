import { createStore, applyMiddleware, Store } from "redux";
// import thunk from "redux-thunk";
// import api from "../middleware/api";
import rootReducer, { ApplicationState } from "../reducers";

function configureStore(
  preloadedState?: ApplicationState
): Store<ApplicationState> {
  return createStore(rootReducer, preloadedState, applyMiddleware());
}

export { configureStore };
