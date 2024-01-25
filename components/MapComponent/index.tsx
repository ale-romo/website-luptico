import { useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const center = {
    lat: 32.0206329,
    lng: -116.6306949,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
  };


  return isLoaded ?
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={14}
      center={center}
      onLoad={(map) => setMap(map)}
    >
    </GoogleMap> : <></>;
};

export default Map;
