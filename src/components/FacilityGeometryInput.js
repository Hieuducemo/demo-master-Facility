import { TextInput } from './TextInput';
/**
 * Facility Geolocation Input component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} an input box define geometry information.
 */
export const FacilityGeometryInput = ({facility, actions}) => {
     // Define onchange function to update facility geometry
    const onchange = (value) => {
        actions.FacilityUpdateAsyncAction({...facility, geometry: value})
    } // Render FacilityGeometryInput component
    return (
         // Render TextInput component with specific props
        <TextInput id={facility.id} value={facility.geometry} placeholder={"0"} onChange={onchange}/>
    )
}