
import { TextInput } from 'components/TextInput';
import { FacilityMemberRemoveButton } from './FacilityMemberRemoveButton';

/**
 * One facility as a table row
 * @param {*} param0 
 * @returns 
 */
export const FacilityMemberTableRow = ({index, subFacility, actions, gid}) => {
    console.log("dd",subFacility)

    const onChangeName = (value) => {
        if (actions.onFacilityMemberUpdate) {
            console.log(subFacility, value)
            const payload = {facility: {id: gid}, subFacility: {...subFacility, name: value}}         
            actions.onFacilityMemberUpdate(payload)
            actions.FacilityAsyncUpdate({...subFacility, name: value})
            .then(json=>console.log("Facilit1NameInput", json.data.facilityUpdate.msg))
        }
    }
    const onChangeGeometry = (value) => {
        if (actions.onFacilityMemberUpdate) {
            console.log("dddss",subFacility, value)
            const payload = {facility: {id: gid}, subFacility: {...subFacility, geometry: value}}         
            actions.onFacilityMemberUpdate(payload)       
            actions.FacilityGeoMAsyncUpdate({...subFacility, geometry: value})
            .then(json=>console.log("FacilityGeoMInput", json.data.facilityUpdate.msg))    
        }
    }
    const onChangeGeolocation = (value) => {
        if (actions.onFacilityMemberUpdate) {
            console.log(subFacility, value)
            const payload = {facility: {id: gid}, subFacility: {...subFacility, geolocation: value}}         
            actions.onFacilityMemberUpdate(payload)
            actions.FacilityGeoLAsyncUpdate({...subFacility, geolocation: value})
            .then(json=>console.log("FacilityGeoLInput", json.data.facilityUpdate.msg)) 
        }
    }
    return (
        <tr>
            <td>{index} {subFacility.id}</td>
            <td>
                <TextInput placeholder={"name"} id={subFacility.id} value={subFacility.name} onChange={onChangeName}/>
            </td>
            <td>
                <TextInput placeholder={"geometry"} id={subFacility.id} value={subFacility.geometry} onChange={onChangeGeometry}/> 
            </td>
            <td>
            <TextInput placeholder={"geolocation"} id={subFacility.id} value={subFacility.geolocation} onChange={onChangeGeolocation}/> 
            </td>
            <td>
                <FacilityMemberRemoveButton facility={{id: gid}} subFacility={subFacility} actions={actions} />
            </td>
        </tr>
    )
}