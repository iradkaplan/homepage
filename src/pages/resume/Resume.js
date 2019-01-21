import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './Resume.css';
import resume_image from './Ira Kaplan Resume.png';


class Resume extends Component {

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
       	  <Link to="/Ira Kaplan Resume.pdf" target="_blank" className="link">
       	  	<img src={resume_image} className="Resume-image" alt="My resume. Click to open PDF." />
       	  	<br />
       	  	Click to open PDF.
       	  	</Link>
       	  </Grid>
        </Grid>
      </div>
      </>
    );
  }
}

export default Resume; 