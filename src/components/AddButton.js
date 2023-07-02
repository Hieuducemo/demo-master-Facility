import { useState, useCallback } from 'react';

/**
 * This is an Add Button with confirmation (two-state button).
 *
 * @param {*} children - The content of the button.
 * @param {Function} onClick - The click event handler for the button.
 * @returns {JSX.Element} The state of the button.
 */
export const AddButton = ({children, onClick}) => {

    //vnitrni stavova promenna definujici, zda je cervene tlacitko zobrazene nebo neni
    const [ state, setState ] = useState(0)

    //nastavi, ze se cervene tlacitko nezobrazuje
    const setState0 = useCallback(() => setState(0))

    //nastavi, ze se cervene tlacitko zobrazuje
    const setState1 = useCallback(() => setState(1))

    if (state === 0) {
        //cervene tlacitko nema byt zobrazeno
        return (
            <button className='btn btn-sm btn-warning' onClick={setState1}>{children}</button>
        )
    } else {
        //cervene tlacitko ma byt zobrazeno
        return (
            <>
                <button className='btn btn-sm btn-warning' onClick={setState0}>{children}</button>
                <button className='btn btn-sm btn-safe' onClick={onClick}>{children}</button>
            </>
        )
    }
}