import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import photo from "./photo.jpg";
import "./Home.css";
import { Typography } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <>
        <div className="App-body">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} sm={5} className="body-content">
              <img src={photo} className="Main-photo" alt="Me" />
            </Grid>
            <Grid item xs={12} sm={7} className="body-content">
              <Typography variant="h3" component="p" paragraph>
                Welcome to my homepage! <br />
                <span className="caption">
                  (We're bringing them back in 2019)
                </span>
              </Typography>
              <Typography variant="h5" component="p" paragraph>
                I'm Ira.
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={4} md={6}>
                  <Typography
                    variant="h5"
                    component="p"
                    style={{ textAlign: "right", lineHeight: "1.2em" }}
                  >
                    I'm an&nbsp;
                  </Typography>
                </Grid>
                <Grid item xs={8} md={6}>
                  <Typography
                    variant="h5"
                    component="p"
                    style={{ textAlign: "left", lineHeight: "1.2em" }}
                  >
                    urbanist.{" "}
                    <span role="img" aria-label="city emoji">
                      🌇
                    </span>{" "}
                    <br />
                    software developer.{" "}
                    <span role="img" aria-label="laptop emoji">
                      💻
                    </span>{" "}
                    <br />
                    transit geek.{" "}
                    <span role="img" aria-label="trolleybus emoji">
                      🚎
                    </span>{" "}
                    <br />
                    coffee enthusiast.{" "}
                    <span role="img" aria-label="coffee emoji">
                      ☕️
                    </span>{" "}
                    <br />
                    bicyclist.{" "}
                    <span role="img" aria-label="bicycle emoji">
                      🚲
                    </span>{" "}
                    <br />
                    scooterer.{" "}
                    <span role="img" aria-label="kick scooter emoji">
                      🛴
                    </span>{" "}
                    <br />
                    hiker.{" "}
                    <span role="img" aria-label="hiking boot emoji">
                      🥾
                    </span>{" "}
                    <br />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Home;
