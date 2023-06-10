import { DeleteButton } from "./DeleteButton"
import { BsFillHouseDashFill } from 'react-icons/bs'
export const FacilityMemberRemoveButton = ({facility, subFacility, actions}) => {
    const onClick = () => {
        actions.onFacilityMemberRemove({facility: facility, subFacility: subFacility})
        subFacility = { ...subFacility, valid:false}
        actions.FacilityUpdateAsyncAction(subFacility)
    }
    return (
        <DeleteButton onClick={onClick}><BsFillHouseDashFill/></DeleteButton>
    )
}