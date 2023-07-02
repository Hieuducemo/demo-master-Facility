import { TextInput } from './TextInput'
/**
 * Facility Geolocation Input component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} an input box define gelocation information.
 */
export const FacilityGeolocationInput = ({ facility, actions }) => {
    // Define onchange function to update facility geolocation
    const onchange = (value) => {
        actions.FacilityUpdateAsyncAction({...facility, geolocation: value})
    };
    // Render FacilityGeolocationInput component
    return (
        // Render TextInput component with specific props
        <TextInput 
            id={facility.id} 
            value={facility.geolocation} 
            placeholder={"0"} 
            onChange={onchange}
        />
    );
};
