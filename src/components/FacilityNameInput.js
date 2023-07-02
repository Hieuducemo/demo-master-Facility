import { TextInput } from './TextInput'
/**
 * Renders an input field for editing the facility name.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} a input box to define name of facility. 
 */
export const FacilityNameInput = ({ facility, actions }) => {
    // Define onchange function to update facility name
    const onchange = (value) => {
        // Invoke async action to update the facility name with the new value
        actions.FacilityUpdateAsyncAction({ ...facility, name: value })
    };

    // Render FacilityNameInput component
    return (
        // Render TextInput component with specific props
        <TextInput
            id={facility.id}
            value={facility.name}
            placeholder={"název facility"}
            onChange={onchange}
        />
    )
}
