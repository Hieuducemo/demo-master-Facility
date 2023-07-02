import Card from "react-bootstrap/Card";
import { FacilityMembersTable } from './FacilityMembersTable';
import { FacilityMemberAddButton } from "./FacilityMemberAddButton";
import { FacilitySearch } from "./FacilitySearch";

/**
 * Renders a card containing a list of Facility members.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} a card contains add button, subFacility information and facility name search.
 */
export const FacilityMembersCard = ({facility, actions}) => {
    return (
        <Card>
            <Card.Header className="xyz">
                <Card.Title className='facility-card'>
                    <h3 className="subfacilities-title">Subfacilities</h3>
                   <FacilityMemberAddButton className="Addbtn" facility={facility} actions={actions} />
                </Card.Title>
            </Card.Header>
            <Card.Body className="bcd">
                <FacilityMembersTable facility={facility} actions={actions}/>
                <FacilitySearch />
            </Card.Body>
        </Card>
    )
}