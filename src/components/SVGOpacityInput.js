import React from 'react'
/**
 * Renders an input for selecting the opacity of an SVG.
 *
 * @param {Object} props - The component props.
 * @param {number} props.opacity - The current opacity value.
 * @param {Function} props.onChange - The function called when the opacity changes.
 * @returns {JSX.Element} sroll bar for adjust SVG overlay 's opacity color
 */
export const SVGOpacityInput =({opacity,onChange}) =>{
    return(
        <div className="input-container">
        <label>Opacity:</label>
        <input
          type="range"
          id="opacityInput"
          min="0" max="1" step="0.1"
          value={opacity}
          onChange={onChange}
        />
      </div>
    )
}