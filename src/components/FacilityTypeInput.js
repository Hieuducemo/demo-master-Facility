import { SelectInput } from "./Selectlist"

export const FacilityTypeInput = ({ facility, actions }) => {
    // Define onchange function to update facility type
    const onchange = (value) => {
        // Invoke async action to update the facility type with the selected type's ID
        actions.FacilityUpdateAsyncAction({ ...facility, facilitytype_id: value.type.id })
    };

    // Render FacilityTypeInput component
    return (
        <SelectInput
            id={facility.id}
            value={facility.type.id}
            placeholder={facility.type.name}
            onChange={onchange}
        />
    )
}
