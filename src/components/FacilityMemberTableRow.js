
import { TextInput } from 'components/TextInput';
import { FacilityMemberRemoveButton } from './FacilityMemberRemoveButton';

/**
 * One facility as a table row
 * @param {*} param0 
 * @returns 
 */
export const FacilityMemberTableRow = ({subFacility, actions, gid}) => {
    if(subFacility.valid){
    return (
        <tr>
            <td>{subFacility.id}</td>
            <td>
                <TextInput placeholder={"name"} id={subFacility.id} value={subFacility.name} />
            </td>
            <td>
                <TextInput placeholder={"0"} id={subFacility.id} value={subFacility.geometry} /> 
            </td>
            <td>
            <TextInput placeholder={"0"} id={subFacility.id} value={subFacility.geolocation} /> 
            </td>
            <td>
             <FacilityMemberRemoveButton facility={{id: gid}} subFacility={subFacility} actions={actions} />
            </td>
        </tr>
    )
    }
}