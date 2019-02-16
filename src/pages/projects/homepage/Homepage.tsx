import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Homepage.css";
import screenshot from "./homepage_screenshot.png";

class Homepage extends Component {
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
            <Grid item xs={12} md={6} className="body-content">
              <Paper className="image-paper">
                <img src={screenshot} className="screenshot" alt="Me" />
                <br />
                <Typography variant="caption">Homepageception</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className="body-content">
              <p className="body-text">
                I made this website in January 2019 as a place to document some
                of my work.
                <br />
                (Expect periodic updates to the Projects list!)
              </p>
              <p className="body-text">
                I used{" "}
                <Link
                  to="//facebook.github.io/create-react-app/"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  Create React App
                </Link>{" "}
                to bootstrap it, did the UI in{" "}
                <Link
                  to="//material-ui.com"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  Material-UI
                </Link>
                , and used{" "}
                <Link
                  to="//reacttraining.com/react-router/"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  React Router
                </Link>{" "}
                for routing. I use{" "}
                <Link
                  to="//firebase.google.com"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  Google Firebase
                </Link>{" "}
                for hosting. You can find the source code on GitHub{" "}
                <Link
                  to="//github.com/iradkaplan/homepage"
                  target="_blank"
                  className="linkWithUnderline"
                >
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
