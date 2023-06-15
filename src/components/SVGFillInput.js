import React from 'react'

export const SVGFillColorInput =({color,onChange}) =>{
    return(
        <div className="input-container">
      <label>Fill Color:</label>
      <input
        type="color"
        name="fillColor"
        value={color}
        onChange={onChange}
      />
    </div>
    )
}