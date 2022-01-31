import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import icon from "../images/icon-location.png";

function Map(props) {
  const { location } = props;
  const [map, setMap] = useState(null);

  function handleView() {
    if (map && location) {
      map.flyTo(location, 12, {
        duration: 4,
      });
    }
  }

  useEffect(() => handleView(), [location]);

  const locationIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [46, 56],
    iconAnchor: [18, 50],
  });

  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={false}
      whenCreated={(map) => setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={locationIcon}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
