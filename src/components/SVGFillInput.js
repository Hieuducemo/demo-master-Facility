import React from 'react'
/**
 * Renders an input for selecting the fill color of an SVG.
 *
 * @param {Object} props - The component props.
 * @param {string} props.color - The current fill color value.
 * @param {Function} props.onChange - The function called when the fill color changes.
 * @returns {JSX.Element} color bar for edit SVG overlay's color. 
 */
export const SVGFillColorInput =({color,onChange}) =>{
    return(
        <div className="input-container">
      <label>Fill Color:</label>
      <input
        type="color"
        id="colorInput"
        value={color}
        onChange={onChange}
      />
    </div>
    )
}