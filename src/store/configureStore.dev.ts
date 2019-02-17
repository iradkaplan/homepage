import { Store, createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
// import api from "../middleware/api";
import rootReducer, { ApplicationState } from "../store";
import ReduxDevTools from "../components/ReduxDevTools";

function configureStore(
  preloadedState?: ApplicationState
): Store<ApplicationState> {
  const store: Store<ApplicationState> = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(createLogger()),
      ReduxDevTools.instrument()
    )
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("../store", () => {
  //     store.replaceReducer(rootReducer);
  //   });
  // }

  return store;
}

export { configureStore };
