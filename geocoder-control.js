import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder';
import { useState } from 'react';

export default function GeocoderControl(props) {
    const [marker, setMarker] = useState(null);
    const geocoder = useControl<MapboxGeocoder>(() => {
        const ctrl = new MapboxGeocoder({
            ...props,
            marker: false,
            accessToken: props.mapboxAccessToken
        });
        ctrl.on('loading', props.onLoading);
        ctrl.on('results', props.onResults);
        ctrl.on('result', evt => {
            props.onResult(evt);
        
            const {result} = evt;
            const location =
                result &&
                (result.center || (result.geometry?.type === 'Point' && result.geometry.coordinates));
            if (location && props.marker) {
                setMarker(<Marker {...props.marker} longitude={location[0]} latitude={location[1]} />);
            } else {
                setMarker(null);
            }
        });
        ctrl.on('error', props.onError);
            return ctrl;
        },
        {
            position: props.position
        }
    );
}

const noop = () => {};

GeocoderControl.defaultProps = {
    marker: true,
    onLoading: noop,
    onResults: noop,
    onResult: noop,
    onError: noop
};