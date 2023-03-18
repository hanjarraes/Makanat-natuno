import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Test() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBofbW6GkcildWJ_h7uPhJrRy0XkUwL9iE"
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}