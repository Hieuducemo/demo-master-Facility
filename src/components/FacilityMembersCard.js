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
                    <th>Subfacilities</th>< br></br>
                    <th><FacilityMemberAddButton facility={facility} actions={actions} /></th>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <FacilityMembersTable facility={facility} actions={actions}/>
                <FacilitySearch />
            </Card.Body>
        </Card>
    )
}