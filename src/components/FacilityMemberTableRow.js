import { Trash } from 'react-bootstrap-icons';
import { TextInput } from 'components/TextInput';
import { DeleteButton } from 'components/DeleteButton';


import { FacilityMemberRemoveButton } from './FacilityMemberRemoveButton';
/**
 * One member as a table row
 * @param {*} param0 
 * @returns 
 */
export const FacilityMemberTableRow = ({index, subFacility, actions, gid}) => {
    console.log("dd",subFacility)
    //remove button action
    const onclick = () => {
        const payload = {facility: {id: gid}, subFacility: subFacility}
       
        actions.onFacilityMemberRemove(payload)
    }

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
                <DeleteButton onClick={onclick}><Trash /> Smaž</DeleteButton><br/>
                <FacilityMemberRemoveButton facility={{id: gid}} subFacility={subFacility} actions={actions} />
            </td>
        </tr>
    )
}