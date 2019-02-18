import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Resume.css";
import resume_image from "./Ira Kaplan Resume.png";

class Resume extends Component {
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
            <Grid item>
              <Paper className="image-paper">
                <Link
                  to="/Ira Kaplan Resume.pdf"
                  target="_blank"
                  className="link"
                >
                  <img
                    src={resume_image}
                    className="Resume-image"
                    alt="My resume. Click to open PDF."
                  />
                  <Typography variant="caption" paragraph>
                    Click to open PDF.
                  </Typography>
                </Link>
                <Link
                  to="//linkedin.com/in/irakaplan"
                  target="_blank"
                  className="link"
                >
                  <Typography variant="caption">
                    Or view my LinkedIn profile.
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Resume;
