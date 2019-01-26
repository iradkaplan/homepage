import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DeckGL, { LineLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import "./BikeLanes.css";

const MAPBOX_ACCESS_TOKEN = process.env["REACT_APP_MAPBOX_TOKEN"];

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781]
  }
];

class BikeLanes extends Component {
  render() {
    const layers = [new LineLayer({ id: "line-layer", data })];
    return (
      <>
        {console.log(MAPBOX_ACCESS_TOKEN)}
        <Grid item xs={12} className="navbar-shim" />
        <DeckGL
          initialViewState={initialViewState}
          controller={true}
          layers={layers}
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </>
    );
  }
}

export default BikeLanes;
