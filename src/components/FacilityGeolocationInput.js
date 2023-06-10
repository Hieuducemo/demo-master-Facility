import { TextInput } from './TextInput';

export const FacilityGeolocationInput = ({facility, actions}) => {
    const onchange = (value) => {
        actions.FacilityUpdateAsyncAction({...facility, geolocation: value})
            .then(json=>console.log("FacilityNameInput", json.data.facilityUpdate.msg))
    }
    return (
        <TextInput id={facility.id} value={facility.geolocation} placeholder={"0"} onChange={onchange}/>
    )
}