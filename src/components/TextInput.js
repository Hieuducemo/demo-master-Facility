import { useState, useMemo, useCallback } from 'react'

import { CreateDelayer } from 'utils/CreateDelayer'

/**
 * Editable Text (input type="text")
 * @param {*} id mandatory identification, often related to id of entity 
 * @param {str} value value of input
 * @param {str} placeholder value of help if the text is not displayed
 * @param {(value) => void} onChange delayed callback notifying about the change
 * @returns 
 */
export const TextInput = ({ id, value, onChange, placeholder }) => {
    // Initialize localValue state with the initial value
    const [localValue, setLocalValue] = useState(value)

    // Create a delayer function using useMemo to debounce the onChange callback
    const delayer = useMemo(() => CreateDelayer(), [id])

    // Define localOnChange function using useCallback to memoize the function and avoid unnecessary re-renders
    const localOnChange = useCallback(
        (e) => {
            // Get the new value from the input element
            const newValue = e.target.value

            // Update the localValue state
            setLocalValue(newValue)

            // Invoke the onChange callback with the new value using the delayer function
            if (onChange) {
                delayer(() => onChange(newValue));
            }
        },
        [id, onChange]
    )

    // Render the TextInput component
    return (
        <input className="form-control" placeholder={placeholder} value={localValue} onChange={localOnChange} />
    )
}
