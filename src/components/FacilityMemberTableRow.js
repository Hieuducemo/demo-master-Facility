
import { TextInput } from 'components/TextInput';
import { FacilityMemberRemoveButton } from './FacilityMemberRemoveButton';

/**
 * Renders a table listing the facility members.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} tables contains facility information and delete button 
 */
export const FacilityMemberTableRow = ({subFacility, actions, gid}) => {
    // Show only valid facilities 
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