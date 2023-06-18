import { TextInput } from './TextInput';

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