import { useState, useCallback } from 'react';

/**
 * This is a Delete Button with confirmation (two-state button).
 *
 * @param {*} children - The content of the button.
 * @param {Function} onClick - The click event handler for the button.
 * @returns {JSX.Element} The state of button 
 */
export const DeleteButton = ({ children, onClick }) => {

    // Internal state variable indicating whether the red button is displayed or not
    const [state, setState] = useState(0);

    // Sets the state to hide the red button
    const setState0 = useCallback(() => setState(0));

    // Sets the state to display the red button
    const setState1 = useCallback(() => setState(1));

    if (state === 0) {
        // The red button should not be displayed
        return (
            <button className='btn btn-sm btn-warning' onClick={setState1}>{children}</button>
        );
    } else {
        // The red button should be displayed
        return (
            <>
                <button className='btn btn-sm btn-warning' onClick={setState0}>{children}</button>
                <button className='btn btn-sm btn-danger' onClick={onClick}>{children}</button>
            </>
        );
    }
};
