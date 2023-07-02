import { DeleteButton } from "./DeleteButton";
import { BsFillHouseDashFill } from 'react-icons/bs';
/**
 * Facility Member Remove Button component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.subFacility - The subFacility object to be removed.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} delete button to remove facility from row, icon.
 */
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
