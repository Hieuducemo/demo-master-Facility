import { TextInput } from './TextInput';

export const FacilityNameInput = ({facility, actions}) => {
    const onchange = (value) => {
        console.log("changed", value)
        actions.FacilityUpdateAsyncAction({...facility, name: value})
            .then(json=>console.log("FacilityNameInput", json.data.facilityUpdate.msg))
    }
    return (
        <TextInput id={facility.id} value={facility.name} placeholder={"název skupiny"} onChange={onchange}/>
    )
}