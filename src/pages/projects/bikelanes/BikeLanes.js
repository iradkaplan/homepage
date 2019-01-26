import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./BikeLanes.css";

class BikeLanes extends Component {
  render() {
    return (
      <>
        <Grid item xs={12} className="navbar-shim" />
        <div className="App-body">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item />
          </Grid>
        </div>
      </>
    );
  }
}

export default BikeLanes;
