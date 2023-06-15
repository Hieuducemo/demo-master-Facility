import React from 'react'

export const SVGOpacityInput =({opacity,onChange}) =>{
    return(
        <div className="input-container">
      <label>Opacity:</label>
      <input
        type="number"
        name="fillOpacity"
        step = "0.1"
        min="0"
        max="1"
        value={opacity}
        onChange={onChange}
      />
    </div>
    )
}