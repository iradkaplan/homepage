import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Homepage from "./pages/projects/homepage/Homepage";
import SankeyRCV from "./pages/projects/sankeyrcv/SankeyRCV";
import ReduxDevTools from "./components/ReduxDevTools";

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route path="/" exact component={Home} />
            <Route path="/resume/" component={Resume} />
            <Route path="/projects/homepage/" component={Homepage} />
            <Route path="/projects/sf-rcv/" component={SankeyRCV} />
            <ReduxDevTools />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
