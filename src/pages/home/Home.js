import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import photo from '../../static/IMG_4917.jpg';
import './Home.css';


class Home extends Component {

  render() {
    return (
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
            <span role="img" aria-label="bike and scooter emojis">
            🚲 🛴 🚲 🛴 🚲 🛴
            </span>
          </p>
          <p class="body-text">
          This website exists for a couple of reasons: It's a sandbox for me to play around with web technologies. It's a place for me to showcase my work.
          </p>
          <p class="body-text">
          Additionally, problems with social media and the centralization of the web have become increasingly clear. This site is me doing a small part to bring back the freespirited web of the 90s and early 2000s. If you know of any web rings I should join, drop me a line! 
          </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home; 