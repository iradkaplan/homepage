import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
