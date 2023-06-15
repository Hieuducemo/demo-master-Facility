import React from 'react'

export const RadiusInput =({radius,onChange}) =>{
    return(
        <div className="input-container">
      <label>SVG Radius:</label>
      <input
        type="number"
        name="radius"
        value={radius}
        onChange={onChange}
      />
    </div>
    )
}