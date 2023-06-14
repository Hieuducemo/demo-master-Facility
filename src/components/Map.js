import "./Mapstyle.css"
import "leaflet/dist/leaflet.css"
import React, { useState } from 'react'
import { MapContainer, TileLayer, SVGOverlay, Circle } from 'react-leaflet'

export const ShowMap = ({ facility }) => {
  const location = facility.geolocation
  if(location!==null){
  const [x1, y1] = location.split(",").map((item) => item.trim())
  const x = parseFloat(x1)
  const y = parseFloat(y1)
  const center = [x, y]
  const radius = 0.4
  const bounds = [
    [center[0] - radius * 0.01, center[1] - radius * 0.01],
    [center[0] + radius * 0.01, center[1] + radius * 0.01]
  ]

  const [circleProps, setCircleProps] = useState({
    radius: 100,
    color: "red",
    fillColor: "lightblue",
    fillOpacity: 0.3
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCircleProps((prevProps) => ({
      ...prevProps,
      [name]: value
    }))
  }
  
  return (
    <div className="map-container">
      <MapContainer center={center} zoom={13} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SVGOverlay bounds={bounds}>
          <text x="50%" y="50%" stroke="red">
            {facility.name}
          </text>
          <Circle
            center={center}
            radius={circleProps.radius}
            pathOptions={{
              color : circleProps.color,
              fillColor: circleProps.fillColor,
              fillOpacity: circleProps.fillOpacity
            }}
          />
        </SVGOverlay>
      </MapContainer>
      <div className="overlay">
        <div className="input-container">
          <label>SVG Radius:</label>
          <input
            type="number"
            name="radius"
            value={circleProps.radius}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>SVG Color:</label>
          <input
               type="color"
               name="color"
               value={circleProps.color}
               onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Fill Color:</label>
          <input
           type="color"
           name="fillColor"
           value={circleProps.color}
           onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label>Fill Opacity:</label>
          <input
            type="number"
            name="fillOpacity"
            step="0.1"
            min="0"
            max="1"
            value={circleProps.fillOpacity}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
          }
}
