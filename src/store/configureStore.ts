import * as prod from "./configureStore.prod";
import * as dev from "./configureStore.dev";
let configureStore: any;
if (process.env.NODE_ENV === "production") {
  configureStore = prod;
} else {
  configureStore = dev;
}

export { configureStore };
