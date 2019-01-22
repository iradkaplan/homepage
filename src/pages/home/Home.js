import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import photo from "./photo.jpg";
import "./Home.css";

class Home extends Component {
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
            <Grid item xs={12} sm={5} className="body-content">
              <img src={photo} className="Main-photo" alt="Me" />
            </Grid>
            <Grid item xs={12} sm={7} className="body-content">
              <p>
                Welcome to my homepage! <br />
                <span className="caption">
                  (We're bringing them back in 2019)
                </span>
              </p>
              <p>I'm Ira.</p>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={6} sm={4} md={6}>
                  <p className="subheader" style={{ textAlign: "right" }}>
                    I'm an{" "}
                  </p>
                </Grid>
                <Grid item xs={6} sm={8} md={6}>
                  <p className="subheader" style={{ textAlign: "left" }}>
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
                  </p>
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
