import { DeleteButton } from "./DeleteButton"

export const FacilityMemberRemoveButton = ({facility, subFacility, actions}) => {
    console.log("gg",subFacility)
    const onClick = () => {
        console.log('jdu smazat uzivatele')
        actions.onFacilityMemberRemove({facility: facility, subFacility: subFacility})
       
    }
    return (
        <DeleteButton onClick={onClick}>Del</DeleteButton>
    )
}