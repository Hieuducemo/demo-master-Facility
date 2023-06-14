import { TextInput } from './TextInput';

export const FacilityGeometryInput = ({facility, actions}) => {
    const onchange = (value) => {
        actions.FacilityUpdateAsyncAction({...facility, geometry: value})
    }
    return (
        <TextInput id={facility.id} value={facility.geometry} placeholder={"0"} onChange={onchange}/>
    )
}