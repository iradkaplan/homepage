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
        <div className="App-body">
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
              <Typography variant="body1" paragraph>
                You can view my resume below, or click the image to open a PDF.
                You can also{" "}
                <Link
                  to="//linkedin.com/in/irakaplan"
                  target="_blank"
                  className="link"
                >
                  find me on LinkedIn.
                </Link>
              </Typography>
            </Grid>
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
                  <Typography variant="caption">Click to open PDF.</Typography>
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
