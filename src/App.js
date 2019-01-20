import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar   from './components/navbar/NavBar';
import Home     from './pages/home/Home';
import Resume   from './pages/resume/Resume';
import Homepage from './pages/projects/homepage/Homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/resume/" component={Resume} />
          <Route path="/projects/homepage/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
