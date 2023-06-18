import { DeleteButton } from "./DeleteButton";
import { BsFillHouseDashFill } from 'react-icons/bs';

export const FacilityMemberRemoveButton = ({ facility, subFacility, actions }) => {
    // Define onClick function to handle member removal
    const onClick = () => {
        // Invoke action to remove member from facility
        actions.onFacilityMemberRemove({ facility: facility, subFacility: subFacility })

        // Update subFacility to be marked as invalid
        subFacility = { ...subFacility, valid: false }

        // Invoke async action to update the facility with the modified subFacility
        actions.FacilityUpdateAsyncAction(subFacility)
    };

    // Render FacilityMemberRemoveButton component
    return (
        // Render DeleteButton component with specific props
        <DeleteButton onClick={onClick}>
            <BsFillHouseDashFill />
        </DeleteButton>
    );
};
