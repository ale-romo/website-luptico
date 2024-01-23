import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map: React.FC = () => {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
      defaultZoom={13}>
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  ));

  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: '500px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
