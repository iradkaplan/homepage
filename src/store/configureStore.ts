import * as prod from "./configureStore.prod";
import * as dev from "./configureStore.dev";
import { ApplicationState } from "../store";
import { Store, AnyAction } from "redux";

type configureStoreType = {
  configureStore: (
    preloadedState?: ApplicationState | undefined
  ) => Store<ApplicationState, AnyAction>;
};

let configureStore: configureStoreType;
if (process.env.NODE_ENV === "production") {
  configureStore = prod;
} else {
  configureStore = dev;
}

export { configureStore };
