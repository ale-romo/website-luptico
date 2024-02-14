import { useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

interface Place {
  lat: number,
  type: string,
  lng: number,
  name: string,
  telephone: string,
  web: string,
  desc: string,
  img: string,
}

interface Props {
  places: Place[];
}

function slugify(str: string) {
  return String(str)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const center = {
  lat: 32.0206329,
  lng: -116.6306949,
};

const Map = ({ places }: Props) => {
  const [map, setMap] = useState<google.maps.Map>();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
    zIndex: "20",
  };

  const markerClickHandler = () => console.log('clicked');

  const getPlaceID = (place: Place, i: number) =>
  `${slugify(place.name)}-${i}`;

  const getMarkerIcon = (type: string, active: boolean) => {
    switch (type) {
      case 'Luptico':
        return `/images/pinLuptico${active ? 'Active': ''}.webp`;
      case 'vinedo':
        return `/images/pinWine${active ? 'Active': ''}.webp`;
      case 'restaurante':
        return `/images/pinFood${active ? 'Active': ''}.webp`;
      default:
        return `/images/images/pinWine.webp`;
    }
  }


  return isLoaded ?
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={14}
      center={center}
      onLoad={(map) => setMap(map)}
    >
      {places.map((place, index) => {
        return <MarkerF
          key={`${getPlaceID(place, index)}-markerF`}
          onClick={() => markerClickHandler()}
          position={{
            lat: place.lat,
            lng: place.lng,
          }}
          options={{
            icon: getMarkerIcon(place.type, false),
          }}
        />
      })}
    </GoogleMap> : <></>;
};

export default Map;
