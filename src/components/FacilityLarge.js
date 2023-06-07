import Card from "react-bootstrap/Card";
import { FacilityMembersCard } from './FacilityMembersCard';
import { FacilityNameInput } from "./FacilityNameInput";
import { FacilityTypeInput } from "./FacilityTypeInput"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { FacilityAttributesEditable } from "./FacilityAttributesEditable";


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
                <Row>
                    <Col>
                        Facility {facility.name} ({facility.id})
                    </Col>
                    <Col>
                        <FacilityNameInput facility={facility} actions={actions} /> 
                    </Col>
                    <Col>
                        <FacilityTypeInput facility={facility} actions={actions} />
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <FacilityAttributesEditable facility={facility} actions={actions} />               
                <FacilityMembersCard facility={facility} actions={actions} />               
            </Card.Body>
            <Card.Body>
                {JSON.stringify(facility)}
            </Card.Body>
        </Card>
    )
}