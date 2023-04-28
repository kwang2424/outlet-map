/* global document */
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Map, {Marker} from 'react-map-gl';
import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder'
import GeocoderControl from './geocoder-control';
import { GeolocateControl, NavigationControl } from 'react-map-gl';
// import * as turf from '@turf/turf';

import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from './control-panel';

// const GEOFENCE = turf.circle([-74.0122106, 40.7467898], 5, {units: 'miles'});

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia3dhbmcyMDAyIiwiYSI6ImNsZ2d5dXRnYjBnY3IzZW1vMmZhZmlmNHgifQ.X2yO9r0KRGfgdkly34ophw'; // Set your mapbox token here

function Root() {
    const [viewState, setViewState] = React.useState({
        longitude: -74.003207,
        latitude: 40.719632,
        zoom: 14
    });
    const [adding, setAdding] = React.useState(false)
    const [markers, setMarkers] = React.useState([])
    // const [tempMarker, setTempMarker] = React.useState(null)
    // onClick = (viewState, item) => {
    //     console.log('here')
    //     this.setState({
    //     viewport,
    //     tempMarker: {
    //         name: item.place_name,
    //         longitude: item.center[0],
    //         latitude: item.center[1]
    //     }
    //     })
    // }
    if (adding) {
        return (
            <>
            <button onClick={() => setAdding(!adding)}>add marker</button>
            <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{width: 800, height: 600}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
                maxBounds={[-74.09919,40.573975,-73.563774,40.873196]}
                
                // onClick = {evt => setAdding(!adding)}
            >
                {/* <Marker longitude={-74.0122106} latitude={40.7467898} color="red" /> */}
                {/* <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
                <GeolocateControl */}
                <NavigationControl position="bottom-right" />
                <GeolocateControl 
                position="top-left"
                trackUserLocation
                onGeolocate={(e) => console.log(e.coords)} />
            </Map>
            
            </>
        );
    }
    else {
        return (
        <>
        <button onClick={() => setAdding(!adding)}>not add marker</button>
        <Map
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            style={{width: 800, height: 600}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
            maxBounds={[-74.09919,40.573975,-73.563774,40.873196]}
            // onClick = {evt => setAdding(!adding)}
        >
            {/* <Marker longitude={-74.0122106} latitude={40.7467898} color="red" /> */}
            <GeocoderControl mapboxAccessToken={MAPBOX_TOKEN} position="top-left" />
            {/* <NavigationControl position="bottom-right" />
            <GeolocateControl position="top-left" /> */}
            {/* <MapboxGeocoder mapboxAccessToken={MAPBOX_TOKEN}/> */}
            {/*  */}
        </Map>
        {/* <ControlPanel /> */}
        
        </>
        );
    }
}

const root = createRoot(document.body.appendChild(document.createElement('div')));
root.render(<Root />);
