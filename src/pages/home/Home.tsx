import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import photo from "./photo.jpg";
import "./Home.css";
import { Typography, Theme, createStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    sansSerif: {
      fontFamily: theme.typography.sansSerifFonts
    },
    alignLeft: {
      textAlign: "left"
    }
  });

class Home extends Component<{ classes: any }> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="App-body">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} className="body-content">
              <Typography variant="h3" component="p" paragraph>
                Welcome to my homepage! <br />
              </Typography>
              <Typography
                variant="caption"
                component="p"
                className={classes.alignLeft}
                paragraph
              >
                (We're bringing them back in 2019)
              </Typography>
              <img src={photo} className="Main-photo" alt="Me" />
              <Typography
                variant="h5"
                component="p"
                className={classes.sansSerif}
                paragraph
              >
                I'm Ira.
              </Typography>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    component="p"
                    className={classes.sansSerif}
                    style={{ textAlign: "right", lineHeight: "1.2em" }}
                  >
                    I'm an&nbsp;
                  </Typography>
                </Grid>
                <Grid item xs={8} md={6}>
                  <Typography
                    variant="h5"
                    component="p"
                    className={classes.sansSerif}
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
            {/* <Grid item xs={12} sm={5} className="body-content">
              <img src={photo} className="Main-photo" alt="Me" />
            </Grid> */}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Home);
