import React from 'react'

export const SVGCircleColorInput =({color,onChange}) =>{
    return(
        <div className="input-container">
      <label>Fill Color:</label>
      <input
        type="color"
        name="color"
        value={color}
        onChange={onChange}
      />
    </div>
    )
}