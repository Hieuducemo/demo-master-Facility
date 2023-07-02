import React, { useState } from 'react';
import './Mapstyle.css';
import { MapContainer, TileLayer, SVGOverlay } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { SVGFillColorInput } from "./SVGFillInput"
import { SVGOpacityInput } from "./SVGOpacityInput"
/**
 * Renders a map showing the facility's location with an SVG overlay.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @returns {JSX.Element} a map contains SVG overlays
 */
// Komponenta pro zobrazení mapy
export const ShowMap = ({ facility }) => {
  // Načtení souřadnic jako řetězec a převod na pole
  const coordinatesString = facility.geometry;
  const coordinatesArray = JSON.parse(coordinatesString);

  // Načtení geolokačních dat jako řetězec a převod na objekt
  const locationString = facility.geolocation;
  const locationData = JSON.parse(locationString);

  // Určení středu mapy a přiblížení
  const center = locationData.location;
  const zoom = locationData.zoom;

  // Stavové proměnné pro barvu a průhlednost
  const [color, setColor] = useState('blue');
  const [opacity, setOpacity] = useState(0.2);

  // Funkce pro změnu barvy
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // Funkce pro změnu průhlednosti
  const handleOpacityChange = (event) => {
    setOpacity(event.target.value);
  };

  // SVG překryv
  const svgOverlay = (
    <SVGOverlay bounds={coordinatesArray}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1" style={{ width: '100%', height: '100%' }}>
        <rect x="0" y="0" width="1" height="1" fill={color} opacity={opacity} />
      </svg>
    </SVGOverlay>
  );
  
  // Vykreslení komponenty pro zobrazení mapy
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
