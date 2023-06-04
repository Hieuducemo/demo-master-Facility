import { DeleteButton } from "./DeleteButton"

export const FacilityMemberRemoveButton = ({facility, subFacility, actions}) => {
    const onClick = () => {
        console.log('jdu smazat uzivatele')
        actions.onFacilityMemberRemove({facility: facility, subFacility: subFacility})
        subFacility = { ...subFacility, valid: "false"}
        actions.FacilityAsyncDelete(subFacility)
    }
    return (
        <DeleteButton onClick={onClick}>Del</DeleteButton>
    )
}