import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Store } from "redux";
import { ApplicationState } from "./store";
import { LoadingComponent } from "./components/LoadingComponent";
// import ReduxDevTools from "./components/ReduxDevTools";

const AsyncHome = Loadable({
  loader: () => import("./pages/home/Home"),
  loading: LoadingComponent
});
const AsyncResume = Loadable({
  loader: () => import("./pages/resume/Resume"),
  loading: LoadingComponent
});
const AsyncHomepage = Loadable({
  loader: () => import("./pages/projects/homepage/Homepage"),
  loading: LoadingComponent
});
const AsyncRCV = Loadable({
  loader: () => import("./pages/projects/sankeyrcv/SankeyRCV"),
  loading: LoadingComponent
});
const AsyncGreenLanes = Loadable({
  loader: () => import("./pages/projects/greenlanes/GreenLanes"),
  loading: LoadingComponent
});

class App extends Component<{ store: Store<ApplicationState> }> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route path="/" exact component={AsyncHome} />
            <Route path="/resume/" component={AsyncResume} />
            <Route path="/projects/homepage/" component={AsyncHomepage} />
            <Route path="/projects/sf-rcv/" component={AsyncRCV} />
            <Route path="/projects/greenlanes/" component={AsyncGreenLanes} />
            {/* <ReduxDevTools /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
