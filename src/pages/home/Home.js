import React, { Component } from 'react';
import photo from '../../static/IMG_4917.jpg';
import './Home.css';


class Home extends Component {

  render() {
    return (
        <header className="App-header">
          <img src={photo} className="Main-photo" alt="Me" />
          <p>
            Welcome to my homepage!
          </p>
          <p>
          I'm Ira. I'm an urbanist, a software developer, and a coffee enthusiast.
          </p>
          <p>
          🚲 🛴 🚲 🛴 🚲 🛴
          </p>
        </header>
    );
  }
}

export default Home; 