import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import photo from './photo.jpg';
import './Home.css';


class Home extends Component {

  render() {
    return (
      <>
      <Grid item xs={12} className="navbar-shim" />
      <div className="App-body">
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
            I'm Ira.
          </p>
          <Grid container 
                direction="row"
                justify="center"
                alignItems="flex-start">
            <Grid item xs={6} sm={4} md={6}>    
              <p className="subheader" style={{textAlign: "right"}}>
                I'm an&nbsp; 
              </p>
            </Grid>
            <Grid item xs={6} sm={8} md={6}>
              <p className=" subheader" style={{textAlign: "left"}}> 
                urbanist. <span role="img" aria-label="city emoji">🌇</span> <br /> 
                software developer. <span role="img" aria-label="laptop emoji">💻</span> <br /> 
                transit geek. <span role="img" aria-label="trolleybus emoji">🚎</span> <br /> 
                coffee enthusiast. <span role="img" aria-label="coffee emoji">☕️</span> <br /> 
                bicyclist. <span role="img" aria-label="bicycle emoji">🚲</span> <br /> 
                scooterer. <span role="img" aria-label="kick scooter emoji">🛴</span> <br /> 
                hiker. <span role="img" aria-label="hiking boot emoji">🥾</span> <br /> 
              </p>
            </Grid>
          </Grid>
          <p className="body-text">
          This website exists for a couple of reasons. For starters, it's a sandbox for me to play around with web technologies and a place for me to showcase my work.
          </p>
          <p className="body-text">
          But I also hope it can have a bit of the playful spirit of the web in the 90s and early 2000s. Send me your web rings and your low-quality GIFs! 
          </p>
          </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Home; 