import { TextInput } from './TextInput'

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
