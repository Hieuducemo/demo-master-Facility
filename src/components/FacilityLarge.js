import Card from "react-bootstrap/Card"
import { FacilityMembersCard } from './FacilityMembersCard'
import { FacilityNameInput } from "./FacilityNameInput"
import { FacilityTypeInput } from "./FacilityTypeInput"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap/esm"
import { FacilityAttributesEditable } from "./FacilityAttributesEditable"
import {ShowMap} from "./Map"

/**
 * Renders a card describing a Facility in detailed form.
 * @param {*} param0 
 * @returns 
 */

export const FacilityLarge = ({facility, actions}) => {
    return (
        <Card className="fcL">
            <Card.Header>
                <Row>
                    <Col className="fctL"> 
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
            <Card.Body className="card-background">
                <FacilityAttributesEditable facility={facility} actions={actions} />               
                <FacilityMembersCard facility={facility} actions={actions} />
                <ShowMap facility={facility}/>
            </Card.Body>
        </Card>
    )
}