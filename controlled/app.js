/* global document */
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Map, {Marker} from 'react-map-gl';

import * as turf from '@turf/turf';

import 'mapbox-gl/dist/mapbox-gl.css';

const GEOFENCE = turf.circle([-74.0122106, 40.7467898], 5, {units: 'miles'});

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia3dhbmcyMDAyIiwiYSI6ImNsZ2d5dXRnYjBnY3IzZW1vMmZhZmlmNHgifQ.X2yO9r0KRGfgdkly34ophw'; // Set your mapbox token here

function Root() {
  const [viewState, setViewState] = React.useState({
    longitude: -74.003207,
    latitude: 40.719632,
    zoom: 12
  });


  // -74.049919,40.573975,-73.563774,40.873196
  // const sw = [-74.049919,40.573975]
  // const ne = [-73.563774,40.873196]
  // const llb = new mapboxgl.LngLatBounds(sw, ne);
  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
      maxBounds={[-74.09919,40.573975,-73.563774,40.873196]}
    >
      {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}
    </Map>
  );
}

const root = createRoot(document.body.appendChild(document.createElement('div')));
root.render(<Root />);
