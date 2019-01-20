import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import photo from '../../static/IMG_4917.jpg';
import './Resume.css';


class Resume extends Component {

  render() {
    return (
      <>
      <Grid item xs={12} className="navbar-shim" />
      <div className="App-header">
        <Grid container 
              direction="row"
              justify="space-evenly"
              alignItems="center">
       	  <Grid item>
       	  Here's some stuff.
       	  </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Resume; 