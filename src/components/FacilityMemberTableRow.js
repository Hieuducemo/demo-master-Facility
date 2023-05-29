
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
        }
    }
    return (
        <tr>
            <td>{index} {subFacility.id}</td>
            <td>
                <TextInput placeholder={"name"} id={subFacility.id} value={subFacility.name} onChange={onChangeName}/>
            </td>
            <td>
                <FacilityMemberRemoveButton facility={{id: gid}} subFacility={subFacility} actions={actions} />
            </td>
        </tr>
    )
}