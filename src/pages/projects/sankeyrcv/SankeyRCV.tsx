import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./SankeyRCV.css";
import screenshot_june5 from "./sankey_screenshot_june5.png";
import screenshot_june13 from "./sankey_screenshot_june13.png";

class SankeyRCV extends Component {
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
            <Grid item xs={12} className="body-content">
              <Typography variant="h3" style={{ color: "white" }}>
                Making sense of a complex election
              </Typography>
              <p className="body-text">
                San Francisco, where I live, has a complex and unusual voting
                system. For most municipal offices, voters can rank their
                favorite three candidates, a system known as Ranked-Choice
                Voting. Election officials count all of the first choice votes,
                then eliminate the candidate with the fewest votes and
                redistribute their votes to each voter's next-favorite
                candidate. This process is repeated until one candidate earns
                more than 50% of the vote.
              </p>
              <p className="body-text">
                Additionally, vote-by-mail is available to everyone and is very
                popular. Mailed ballots just need to be postmarked by election
                day or dropped at a collection station (available at any polling
                place). Consequently, ballots are still arriving and being
                counted for days or weeks after election day.
              </p>
            </Grid>
            <Grid item xs={12} md={6} className="body-content">
              <Paper className="image-paper">
                <img
                  src={screenshot_june5}
                  className="screenshot"
                  alt="Sankey Diagram of the vote count as of June 5, 2018."
                />
                <br />
                <Typography variant="caption">
                  Sankey diagram of the vote count as of June 5, 2018
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className="body-content">
              <p className="body-text">
                In the June 5, 2018, Mayoral election, two candidates, Jane Kim
                and Mark Leno, followed a strategy in which each one asked their
                first-place voters to vote for the other in second place. After
                the polls closed, the first vote count showed Mark Leno barely
                edging out London Breed, thanks in large part to second-place
                votes from Jane Kim voters. However, the closeness of the vote
                meant that the final result would depend on the ballots left to
                be counted over the ensuing days.
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className="body-content"
              style={{ marginBottom: "2vh" }}
            >
              <Paper className="image-paper">
                <img
                  src={screenshot_june13}
                  className="screenshot"
                  alt="Sankey Diagram of the vote count as of June 13, 2018."
                />
                <br />
                <Typography variant="caption">
                  Sankey diagram of the vote count as of June 13, 2018
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              className="body-content"
              style={{ marginBottom: "2vh" }}
            >
              <p className="body-text">
                The city Department of Elections published new vote counts on
                its{" "}
                <Link
                  to="//sfelections.sfgov.org/june-5-2018-election-results-summary"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  website
                </Link>{" "}
                every day at 4pm. To help explain how the vote count was
                progressing, I made an R script that took the raw data and used
                the{" "}
                <Link
                  to="//cran.r-project.org/web/packages/rcv/index.html"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  rcv package
                </Link>{" "}
                to create{" "}
                <Link
                  to="//en.wikipedia.org/wiki/Sankey_diagram"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  Sankey diagrams
                </Link>{" "}
                of these results, then shared them on social media. Ultimately,
                the late ballots broke for London Breed, and she overtook Mark
                Leno to win the race.
              </p>
              <p className="body-text">
                You can find my source code on GitHub{" "}
                <Link
                  to="//github.com/iradkaplan/sf-rcv-201806"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  here
                </Link>{" "}
                and view auto-generated interactive versions of the diagrams for
                June 5{" "}
                <Link
                  to="//iradkaplan.github.io/sf-rcv-201806/output/interactive_chart_20180605_4.html"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  here
                </Link>{" "}
                and June 13{" "}
                <Link
                  to="//iradkaplan.github.io/sf-rcv-201806/output/interactive_chart_20180613.html"
                  target="_blank"
                  className="linkWithUnderline"
                >
                  here
                </Link>
                . (May not work well on mobile.)
              </p>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default SankeyRCV;
