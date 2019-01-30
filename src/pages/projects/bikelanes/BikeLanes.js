import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import { StaticMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./BikeLanes.css";
import data from "./greenLaneData";

const MAPBOX_ACCESS_TOKEN = process.env["REACT_APP_MAPBOX_TOKEN"];

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

class BikeLanes extends Component {
  render() {
    const layers = [
      new GeoJsonLayer({
        id: "lanes-layer",
        data: data,
        lineWidthScale: 20,
        lineWidthMinPixels: 2,
        getLineColor: [0, 200, 0, 200]
      })
    ];
    return (
      <>
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
