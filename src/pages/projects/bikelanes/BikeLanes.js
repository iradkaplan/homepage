import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import Typography from "@material-ui/core/Typography";
import "mapbox-gl/dist/mapbox-gl.css";
import "./BikeLanes.css";
import data from "./greenLaneData";

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
                layers={layers}
              >
                <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
              </DeckGL>
            </div>
          </Grid>
          <Grid item xs={12} className="App-body body-content">
            <p className="body-text">
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
            <p className="body-text">(Put pictures here)</p>
            <p className="body-text">
              But maybe the thought of being mixed in with car traffic sounds
              intimidating, stressful, or just unpleasant. Maybe you’ve had
              scary encounters with drivers before, or have friends or loved
              ones who have, or you’ve heard on the news about people being
              killed or injured in traffic violence. What are your options if
              you want to avoid all that?
            </p>
            <p className="body-text">
              As the map above shows, there aren’t any protected green lanes
              connecting your origin and destination. Even if your route
              contains green lanes, it’s unlikely that they can get you all the
              way there. They disappear at intersections, or even a bit before
              them. They’re unprotected for half a block because someone with
              political connections called in a favor to avoid losing a parking
              space for their car. The soft-hit posts meant to protect you show
              the scars of being run over by cars and trucks multiple times, a
              reminder of the limited protection they offer. The protected lanes
              are too short, too sparse, too disjointed. You decide not to bike
              to your meetup. Maybe there’s a convenient Muni route, but if not
              you’ll take a car.
            </p>
            <Typography variant="h3" style={{ color: "white" }}>
              It doesn’t have to be this way.
            </Typography>
            <p className="body-text">
              Other cities around the world have seen dramatic increases in
              bicycling after investing in the creation of a cohesive protected
              green lane network. London has been building a network of “Cycle
              Superhighways” spanning the city that, though imperfect, has
              dramatically increased cycling, in many cases moving more people
              than would be possible with car-oriented infrastructure.
            </p>
            <p className="body-text">(Picture of Cycle Superhighways)</p>
            <p className="body-text">
              Seville built a comprehensive protected green lane network from
              practically nothing between 2006 and 2010, and saw bicycling trips
              rise from 3 million per year to 17 million per year over the same
              time period.
            </p>
            <p className="body-text">(Picture of Seville Bike Lane Progress)</p>
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
            <Typography variant="h3" style={{ color: "white" }}>
              Why are protected lanes so important?
            </Typography>
            <p className="body-text">
              About ten percent of people are considered either “Strong and
              Fearless” or “Enthused and Confident” bicyclists. Thirty to
              thirty-five percent are considered “No Way, No How,” and the
              remaining 55-60% of the population are “Interested but Concerned.”
              These are people who might like to bike but are worried about
              safety. This is a huge population of potential bicyclists! If the
              estimates for the US population are true for San Francisco, that’s
              about half a million San Franciscans who might start taking
              micromobility to get around town if we made it safe and
              convenient. But our actual bicycling rate has been stuck between
              3.5% and 4.5% for the last decade. Additionally, the rise of
              e-bikes and other electric-powered micromobility makes our city’s
              famous hills less of a barrier than ever before.
            </p>
            <Typography variant="h3" style={{ color: "white" }}>
              Why do we want people to use micromobility?
            </Typography>
            <p className="body-text">
              Our planet is melting. We can’t keep using fossil fuels to get
              around town if we want to avoid the worst catastrophic effects of
              climate change. And even electric cars cause traffic congestion
              and waste a lot of energy--it’s a lot more energy efficient not to
              move a two-ton appliance around. Besides, do you know how many
              straws you would have to use to match the amount of plastic in a
              Tesla? Me neither, but I bet it’s a lot.
            </p>
            <p className="body-text">
              In addition to the benefits to society, self-powered
              transportation is good for your health and fun.
            </p>
            <Typography variant="h3" style={{ color: "white" }}>
              Data Methodology
            </Typography>
            <p className="body-text">
              This map is meant to be an accurate representation of San
              Francisco’s protected green lanes, and I intend to update it
              periodically to keep it that way. If something seems amiss, please
              reach out!
            </p>
            <p className="body-text">
              I drew all of the protected green lanes on the map myself in QGIS.
              I’ve biked most of them and photographed many, but I also referred
              to Google Maps, the bike network map in the Ford GoBike app, and
              the SFMTA bike network map while drawing them. What counts as a
              protected green lane? For me to include it in my map, it needs to
              be:{" "}
              <ul>
                <li>Paved </li>
                <li>
                  Separated from cars by a either a physical barrier or a very
                  substantial painted buffer
                </li>
              </ul>
              Mixing with pedestrians is fine as long as that’s an intended use
              of the space. Some of the very short lines are things like bus
              boarding islands, where the protected lane goes between the bus
              stop and the sidewalk, or spaces where the city added a few soft
              hit posts to otherwise unprotected lanes.
            </p>
            <p className="body-text">
              I generally didn’t draw paths in parks that aren’t part of a bike
              route external to the park. I excluded infrastructure that leads
              to conflicts with cars:{" "}
              <ul>
                <li>Unprotected lanes</li>
                <li>Mixing zones</li>
                <li>Buffered bike lanes with no barrier to keep cars out</li>
                <li>
                  Unprotected intersections on otherwise protected bike lanes
                </li>
              </ul>
            </p>
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
            <Typography variant="h3" style={{ color: "white" }}>
              Technical Details
            </Typography>
            <p className="body-text">
              The map is in Deck.gl with react-map-gl. I exported the data layer
              from QGIS to GeoJSON, which is then read into the map. Source code
              is here .(include link)
            </p>{" "}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default BikeLanes;
