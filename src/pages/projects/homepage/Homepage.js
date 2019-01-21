import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
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
       	  <Grid item xs={4}>
          <p className="body-text">
       	  I made this website in January 2019 as a place to document some of my work. 
          <br />(Expect periodic updates to the Projects list!) 
          </p>
          <p className="body-text">
          I used&nbsp; 
          <Link to="//facebook.github.io/create-react-app/" target="_blank" className="linkWithUnderline">
            Create React App
          </Link> 
          &nbsp;to bootstrap it, did the UI in&nbsp; 
          <Link to="//material-ui.com" target="_blank" className="linkWithUnderline">
            Material-UI
          </Link> 
          , and used&nbsp;  
          <Link to="//reacttraining.com/react-router/" target="_blank" className="linkWithUnderline">
            React Router
          </Link> 
          &nbsp;for routing. 
          I use&nbsp;  
          <Link to="//firebase.google.com" target="_blank" className="linkWithUnderline">
            Google Firebase
          </Link> 
          &nbsp;for hosting. 
          You can find the source code on GitHub&nbsp; 
          <Link to="//github.com/iradkaplan/homepage" target="_blank" className="linkWithUnderline">
            here.
          </Link>
       	  </p>
          </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Homepage; 