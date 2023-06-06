import Card from "react-bootstrap/Card";
import { FacilityMembersCard } from './FacilityMembersCard';
import { FacilityNameInput } from "./FacilityNameInput";
import { FacilityTypeInput } from "./FacilityTypeInput"

/**
 * Renders a card describing a Facility in detailed form.
 * @param {*} param0 
 * @returns 
 */

export const FacilityLarge = ({facility, actions}) => {
    console.log("lastchange",facility.name)
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Skupina {facility.id} <br />
                    {facility.name} <br />
                    <FacilityNameInput facility={facility} actions={actions} /> <br />
                    <FacilityTypeInput facility={facility} actions={actions} />
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <FacilityMembersCard facility={facility} actions={actions} />
            </Card.Body>
            <Card.Body>
                {JSON.stringify(facility)}
            </Card.Body>
        </Card>
    )
}