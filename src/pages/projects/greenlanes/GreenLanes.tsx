import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import "./GreenLanes.css";
import data from "./greenLaneData.json";
import SFBikeMap from "./SFBikeMap.png";
import GoogleBikeMap from "./GoogleBikeMap.png";
import LondonBikePlan from "./LondonBikePlan.png";
import SevilleBikeMap from "./SevilleBikeMap.png";
import SFBikePlan from "./SFBikePlan.png";

const MAPBOX_ACCESS_TOKEN = process.env["REACT_APP_MAPBOX_TOKEN"];
//37.7637729,-122.4410063,12.69z
// Initial viewport settings
const initialViewState = {
  longitude: -122.4410063,
  latitude: 37.7637729,
  zoom: 11.5,
  pitch: 0,
  bearing: 0
};

class BikeLanes extends Component {
  render() {
    const layers = [
      new GeoJsonLayer({
        id: "lanes-layer",
        data: data,
        lineWidthScale: 5,
        lineWidthMinPixels: 2,
        getLineColor: [0, 200, 0, 200],
        lineJointRounded: true
      })
    ];
    return (
      <>
        <Grid item xs={12} className="navbar-shim" />
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} className="body-content">
            <Typography
              variant="h3"
              style={{ color: "white", textAlign: "center" }}
            >
              Mapping San Francisco's Protected Green Lanes
            </Typography>
          </Grid>
          <Grid item xs={12} className="body-content">
            <div
              style={{
                position: "relative",
                minHeight: "80vh",
                height: "100%"
              }}
            >
              <DeckGL
                initialViewState={initialViewState}
                controller={true}
                //@ts-ignore
                layers={layers}
              >
                <StaticMap
                  mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                  width="auto"
                  height="auto"
                />
              </DeckGL>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={10}
            lg={8}
            xl={6}
            className="App-body body-content"
          >
            <p className="body-text note">
              A quick note on terminology: the pieces of infrastructure I’m
              discussing here are most commonly known as a “protected bike
              lanes” or sometimes as “cycle tracks.” In this article, I instead
              refer to them as “protected green lanes.” This term is more
              accurate, as they exist not just for bikes, but also to serve our
              friends on scooters, skateboards, unicycles, tricycles, and other
              forms of micromobility. It’s also descriptive of both the actual
              color of the best examples and their environmental friendliness.
              In this article, I refer to biking several times, but I also mean
              these other forms of micromobility.
            </p>
            <Typography variant="h3" style={{ color: "white" }}>
              Why is it so hard to get around San Francisco?
            </Typography>
            <p className="body-text">
              Suppose you want to get from your home in the Marina to a meetup
              in the Mission. What route should you take? If you look at the
              SFMTA’s official bike map or Google Maps, you’ll see lots of
              options. The city is covered with colorful lines showing all the
              great places to bike, scoot, and skateboard.
            </p>
            <Typography variant="h3" style={{ color: "white" }} />
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs={12} md={6} className="body-content">
                <Paper className="image-paper">
                  <img
                    src={SFBikeMap}
                    className="screenshot"
                    alt="San Francisco's official bike map."
                  />
                  <br />
                  <Typography variant="caption">
                    San Francisco's official bike map.{" "}
                    <Link
                      to="//www.sfmta.com/maps/san-francisco-bike-network-map"
                      target="_blank"
                      className="captionLink"
                    >
                      source
                    </Link>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} className="body-content">
                <Paper className="image-paper">
                  <img
                    src={GoogleBikeMap}
                    className="screenshot"
                    alt="Google Maps Bike Map"
                  />
                  <br />
                  <Typography variant="caption">
                    Google Maps bike map.{" "}
                    <Link
                      to="//www.google.com/maps/@37.7648823,-122.4363515,12z/data=!5m1!1e3"
                      target="_blank"
                      className="captionLink"
                    >
                      source
                    </Link>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <p className="body-text">
              But maybe the thought of being mixed in with car traffic sounds
              intimidating, stressful, or just unpleasant. Maybe you’ve had
              scary encounters with drivers before, or have friends or loved
              ones who have, or you’ve heard on the news about people being
              killed or injured in traffic violence. What are your options if
              you want to avoid all that?
            </p>
            <p className="body-text">
              As the map at the top of this page shows, there aren’t any
              protected green lanes connecting your origin and destination. Even
              if your route contains green lanes, it’s unlikely that they can
              get you all the way there. They disappear at intersections, or
              even a bit before them. They’re unprotected for half a block
              because someone with political connections called in a favor to
              avoid losing a parking space for their car. The soft-hit posts
              meant to protect you show the scars of being run over by cars and
              trucks multiple times, a reminder of the limited protection they
              offer. The protected lanes are too short, too sparse, too
              disjointed. You decide not to bike to your meetup. Maybe there’s a
              convenient Muni route, but if not you’ll take a car.
            </p>
            <Typography variant="h4" style={{ color: "white" }}>
              It doesn’t have to be this way.
            </Typography>
            <p className="body-text">
              Other cities around the world have seen dramatic increases in
              bicycling after investing in the creation of a cohesive protected
              green lane network. London has been building a network of “
              <Link
                to="//tfl.gov.uk/modes/cycling/routes-and-maps/cycle-superhighways"
                target="_blank"
                className="linkWithUnderline"
              >
                Cycle Superhighways
              </Link>
              ” spanning the city that,{" "}
              <Link
                to="//www.citymetric.com/transport/i-cycled-length-all-london-s-cycling-superhighways-here-s-what-i-learnt-2910"
                target="_blank"
                className="linkWithUnderline"
              >
                though imperfect
              </Link>
              , has dramatically increased cycling, in many cases moving{" "}
              <Link
                to="//ecf.com/news-and-events/news/evolution-cycle-superhighways-london"
                target="_blank"
                className="linkWithUnderline"
              >
                more people
              </Link>{" "}
              than would be possible with car-oriented infrastructure.
            </p>
            <Grid item xs={12} md={10} lg={8} xl={6} className="body-content">
              <Paper className="image-paper">
                <img
                  src={LondonBikePlan}
                  className="screenshot"
                  alt="London's Cycle Superhighways."
                />
                <br />
                <Typography variant="caption">
                  London's Cycle Superhighways.{" "}
                  <Link
                    to="//content.tfl.gov.uk/strategic-cycling-analysis.pdf"
                    target="_blank"
                    className="captionLink"
                  >
                    source [PDF]
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <p className="body-text">
              Seville built a comprehensive protected green lane network from
              practically nothing between 2006 and 2010, and saw{" "}
              <Link
                to="//peopleforbikes.org/blog/landmark-study-from-seville-shows-immediate-results-from-a-bike-network/"
                target="_blank"
                className="linkWithUnderline"
              >
                bicycling trips rise
              </Link>{" "}
              from 3 million per year to 17 million per year over the same time
              period.
            </p>
            <Grid item xs={12} md={10} lg={8} xl={6} className="body-content">
              <Paper className="image-paper">
                <img
                  src={SevilleBikeMap}
                  className="screenshot"
                  alt="Evolution of Seville's protected green lane network."
                />
                <br />
                <Typography variant="caption">
                  Evolution of Seville's protected green lane network.{" "}
                  <Link
                    to="//www.pensandoelterritorio.com/sevilla-ciudad-ciclista/"
                    target="_blank"
                    className="captionLink"
                  >
                    via
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <p className="body-text">
              San Francisco, to its credit, has been building its network of
              protected green lanes over the last several years, and there are
              more in the works, including lanes now under construction on
              Valencia Street and Second Street. The city’s 2017 bicycle
              planning document projects more bikeways, but only a few of them
              will be protected; many of them are disconnected from the existing
              protected green lane network, nor are the design shortcomings of
              existing protected green lanes addressed. San Francisco lacks a
              vision for a network of protected green lanes spanning the city.
            </p>
            <Grid item xs={12} md={10} lg={8} xl={6} className="body-content">
              <Paper className="image-paper">
                <img
                  src={SFBikePlan}
                  className="screenshot"
                  alt="San Francisco's planned bike routes as of 2017."
                />
                <br />
                <Typography variant="caption">
                  San Francisco's planned bike routes as of 2017.{" "}
                  <Link
                    to="//www.sfmta.com/sites/default/files/reports-and-documents/2017/09/booklet_final_web_version.pdf"
                    target="_blank"
                    className="captionLink"
                  >
                    source [PDF]
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <p />
            <Typography variant="h4" style={{ color: "white" }}>
              Why are protected lanes so important?
            </Typography>
            <p className="body-text">
              About ten percent of people are{" "}
              <Link
                to="//www.citylab.com/transportation/2016/01/the-4-types-of-cyclists-youll-meet-on-us-city-streets/422787/"
                target="_blank"
                className="linkWithUnderline"
              >
                considered
              </Link>{" "}
              either “Strong and Fearless” or “Enthused and Confident”
              bicyclists. Thirty to thirty-five percent are considered “No Way,
              No How,” and the remaining 55-60% of the population are
              “Interested but Concerned.” These are people who might like to
              bike but are worried about safety. This is a huge population of
              potential bicyclists! If the estimates for the US population are
              true for San Francisco, that’s about half a million San
              Franciscans who might start taking micromobility to get around
              town if we made it safe and convenient. But our actual bicycling
              rate has been stuck between 3.5% and 4.5% for the last decade, and
              is{" "}
              <Link
                to="//www.sfmta.com/reports/san-francisco-mobility-trends-report-2018"
                target="_blank"
                className="linkWithUnderline"
              >
                down since 2015.
              </Link>{" "}
              Additionally, the rise of e-bikes and other electric-powered
              micromobility makes our city’s famous hills less of a barrier than
              ever before.
            </p>
            <Typography variant="h4" style={{ color: "white" }}>
              Why do we want people to use micromobility?
            </Typography>
            <p className="body-text">
              Our planet is melting. We can’t keep using fossil fuels to get
              around town if we want to avoid the worst catastrophic effects of
              climate change. And even electric cars cause traffic congestion
              and waste a lot of energy--it’s a lot more energy efficient not to
              move a two-ton appliance around. Besides, do you know how many{" "}
              <Link
                to="//www.sfchronicle.com/politics/article/No-more-slurping-through-plastic-straws-in-San-13102063.php"
                target="_blank"
                className="linkWithUnderline"
              >
                straws
              </Link>{" "}
              you would have to use to match the amount of plastic in a Tesla?
              Me neither, but I bet it’s a lot.
            </p>
            <Typography variant="h4" style={{ color: "white" }}>
              Data Methodology
            </Typography>
            <p className="body-text">
              This map is meant to be an accurate representation of San
              Francisco’s protected green lanes, and I intend to update it
              periodically to keep it that way. If something seems amiss, please{" "}
              <Link
                to="//twitter.com/irapolis"
                target="_blank"
                className="linkWithUnderline"
              >
                reach out!
              </Link>
            </p>
            <p className="body-text">
              I drew all of the protected green lanes on the map myself in QGIS.
              I’ve biked most of them and photographed many, but I also referred
              to Google Maps, the bike network map in the Ford GoBike app, and
              the SFMTA bike network map while drawing them. What counts as a
              protected green lane? For me to include it in my map, it needs to
              be:
            </p>
            <div className="list">
              <ul className="body-text">
                <li>Paved </li>
                <li>
                  Separated from cars by a either a physical barrier or a very
                  substantial painted buffer
                </li>
              </ul>
            </div>
            <p className="body-text">
              Mixing with pedestrians is fine as long as that’s an intended use
              of the space. Some of the very short lines are things like bus
              boarding islands, where the protected lane goes between the bus
              stop and the sidewalk, or spaces where the city added a few soft
              hit posts to otherwise unprotected lanes.
            </p>
            <p className="body-text">
              I generally didn’t draw paths in parks that aren’t part of a bike
              route external to the park. I excluded infrastructure that leads
              to conflicts with cars:
            </p>
            <div className="list">
              <ul className="body-text">
                <li>Unprotected lanes</li>
                <li>Mixing zones</li>
                <li>Buffered bike lanes with no barrier to keep cars out</li>
                <li>
                  Unprotected intersections on otherwise protected bike lanes
                </li>
              </ul>
            </div>
            <p className="body-text">
              I excluded most of the length of the paint-protected green lanes
              on JFK because cars park illegally in the buffer, which defeats
              the purpose. I stopped the line for the Embarcadero shared trail
              at Fisherman’s Wharf because pedestrian traffic becomes too heavy
              for safe operation of micromobility devices. I stopped drawing the
              Bay Bridge bike path approximately at the San Francisco County
              line, although it continues to Oakland and Emeryville. I also left
              out the bits of Angel Island that are in San Francisco. Similarly,
              there are few structures on the Farallon Islands, but what’s there
              appears from Google Maps to be quite nice to bike on. Not having
              been there, and unable to find records of the bike experience
              there, I didn’t feel comfortable including it on my map.
            </p>
            <Typography variant="h5" style={{ color: "white" }}>
              Revision History
            </Typography>
            <div className="list">
              <ul className="body-text">
                <li>
                  <b>February 17, 2019 -</b> Added new Polk lanes, bus island on
                  Masonic at Geary, and Gorgas cut-through.
                </li>
                <li>
                  <b>February 1, 2019 -</b> Added block of Bay Street, made a
                  gap for the often blocked driveway at One Polk, and added new
                  Valencia lanes.
                </li>
                <li>
                  <b>January 30, 2019 -</b> Initial version published.
                </li>
              </ul>
            </div>
            <Typography variant="h4" style={{ color: "white" }}>
              Technical Details
            </Typography>
            <p className="body-text">
              The map is in Deck.gl with react-map-gl. I exported the data layer
              from QGIS to GeoJSON, which is then read into the map.{" "}
              <Link
                to="//github.com/iradkaplan/homepage"
                target="_blank"
                className="linkWithUnderline"
              >
                Source code is here.
              </Link>
            </p>{" "}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default BikeLanes;
