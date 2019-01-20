import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.css';


class Homepage extends Component {

  render() {
    return (
      <>
      <Grid item xs={12} className="navbar-shim" />
      <div className="App-body">
        <Grid container 
              direction="row"
              justify="space-evenly"
              alignItems="center">
       	  <Grid item>
       	  Here's some more stuff.
       	  </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Homepage; 