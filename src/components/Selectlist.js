import React, { useState, useCallback } from 'react'
/**
 * Renders a select input component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the select input.
 * @param {string} props.value - The current value of the select input.
 * @param {Function} props.onChange - The function called when the select input value changes.
 * @param {string} props.placeholder - The placeholder text for the select input.
 * @returns {JSX.Element} selection of facility's type. 
 */
export const SelectInput = ({ id, value, onChange, placeholder }) => {
  const [localValue, setLocalValue] = useState(value)

  const localOnChange = useCallback(
    (e) => {
      const newValue = e.target.value
      setLocalValue(newValue)
      if (onChange) {

        // Get the selected option and its data attributes
        const selectedOption = e.target.options[e.target.selectedIndex]
        const selectedName = selectedOption.getAttribute('data-name')

        // Call the provided onChange function with the updated value and selected name
        onChange({ id, type: { id: newValue, name: selectedName } })
      }
    },
    [id, onChange]
  )

  return (
    <select className='form-control' value={localValue} placeholder={placeholder} onChange={localOnChange}>
      
      {/* Options for the select input */}
      <option value="764217ee-a7a0-11ed-b76e-0242ac110002" data-name="areál">areál</option>
      <option value="76421cf8-a7a0-11ed-b76e-0242ac110002" data-name="budova">budova</option>
      <option value="76421e10-a7a0-11ed-b76e-0242ac110002" data-name="patro">patro</option>
      <option value="76421faa-a7a0-11ed-b76e-0242ac110002" data-name="učebna">učebna</option>
      <option value="76421ee2-a7a0-11ed-b76e-0242ac110002" data-name="skupina místností">skupina místností</option>
      <option value="7642209a-a7a0-11ed-b76e-0242ac110002" data-name="laboratoř">laboratoř</option>
    </select>
  )
}
