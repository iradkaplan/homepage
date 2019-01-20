import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import photo from '../../static/IMG_4917.jpg';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <>
      <Grid item xs={12} className="navbar-shim" />
      <div className="App-header">
        <Grid container 
              direction="row"
              justify="space-evenly"
              alignItems="center">
          <Grid item xs={12} sm={6} className="body-content">
            <img src={photo} className="Main-photo" alt="Me" />
          </Grid>
          <Grid item xs={12} sm={6} className="body-content">
          <p>
            Welcome to my homepage!
          </p>
          <p>
          I'm Ira. I'm an urbanist, software developer, and coffee enthusiast.
          </p>
          <p>
            <span role="img" aria-label="a series of emojis">
            🚲 🛴 🚎 🚂 🌁 ☕️
            </span>
          </p>
          <p class="body-text">
          This website exists for a couple of reasons. For starters, it's a sandbox for me to play around with web technologies and a place for me to showcase my work.
          </p>
          <p class="body-text">
          But there's also a bigger reason. Over the last few years, problems with social media and the centralization of the web have become increasingly clear. Just a few companies control a staggering amount of the content on today's web. When they get bought or sold or go bankrupt, a lot of that content is lost. In the meantime, they act as censors on the bounds of acceptable content. This site is my effort to do a small part to bring back a more rambunctious version of the web, like it was in the 90s and early 2000s. 
          </p>
          </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Home; 