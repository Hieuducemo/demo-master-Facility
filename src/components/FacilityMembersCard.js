import Card from "react-bootstrap/Card";
import { FacilityMembersTable } from './FacilityMembersTable';
import { FacilityMemberAddButton } from "./FacilityMemberAddButton";
import { FacilitySearch } from "./FacilitySearch";

/**
 * Renders a card containing a list of Facility members.
 */
export const FacilityMembersCard = ({facility, actions}) => {

    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <div className='facility-card'>
                    <h3 className="subfacilities-title">Subfacilities</h3>
                    <th><FacilityMemberAddButton facility={facility} actions={actions} /></th>
                    </div>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <FacilityMembersTable facility={facility} actions={actions}/>
                <FacilitySearch />
            </Card.Body>
        </Card>
    )
}