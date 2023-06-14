import { TextInput } from './TextInput';

export const FacilityNameInput = ({facility, actions}) => {
    const onchange = (value) => {
        actions.FacilityUpdateAsyncAction({...facility, name: value})
    }
    return (
        <TextInput id={facility.id} value={facility.name} placeholder={"název skupiny"} onChange={onchange}/>
    )
}