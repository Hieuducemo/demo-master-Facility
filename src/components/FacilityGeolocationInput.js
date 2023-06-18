import { TextInput } from './TextInput'

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
