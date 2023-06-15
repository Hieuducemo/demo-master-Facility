
import React, { useState } from 'react';
import './Mapstyle.css';
import { MapContainer, TileLayer, SVGOverlay } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { SVGFillColorInput } from "./SVGFillInput"
import { SVGOpacityInput } from "./SVGOpacityInput"

export const ShowMap = ({ facility }) => {
  const coordinatesString = facility.geometry;
  const coordinatesArray = JSON.parse(coordinatesString);

  const locationString = facility.geolocation;
  const locationData = JSON.parse(locationString);

  const center = locationData.location;
  const zoom = locationData.zoom;

  const [color, setColor] = useState('blue');
  const [opacity, setOpacity] = useState(0.2);

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
  };

  const svgOverlay = (
    <SVGOverlay bounds={coordinatesArray}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" style={{ width: '100%', height: '100%' }}>
        <rect x="0" y="0" width="1" height="1" fill={color} opacity={opacity} />
      </svg>
    </SVGOverlay>
  );

  return (
    <div>
      <SVGFillColorInput color={color} onChange={handleColorChange}/>
      <div>
      <SVGOpacityInput opacity={opacity} onChange={handleOpacityChange}/>
      </div>
      <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {svgOverlay}
      </MapContainer>
    </div>
  );
};
