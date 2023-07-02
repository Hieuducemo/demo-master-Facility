import { SelectInput } from "./Selectlist"
/**
 * Renders a select input for selecting the facility type.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} a select list of facility's types. 
 */
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
