import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FacilityTypeInput } from "./FacilityTypeInput"
import { FacilityNameInput } from "./FacilityNameInput"

export const FacilityAttributesEditable = ({facility, actions}) => {
    return (
        <Card>
            <Card.Header>
                        Facility {facility.name} ({facility.id})
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col md={2}><b>Název</b></Col>
                    <Col md={10}>
                        <FacilityNameInput facility={facility} actions={actions} />
                    </Col>
                <Row>
                </Row>
                    <Col md={2}><b>Typ</b></Col>
                    <Col md={10}>
                        <FacilityTypeInput facility={facility} actions={actions} />
                    </Col>
                </Row>
                
            </Card.Body>
            <Card.Body>
                {JSON.stringify(facility)}
            </Card.Body>
        </Card>

    )
}