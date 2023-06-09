import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FacilityTypeInput } from "./FacilityTypeInput"
import { FacilityNameInput } from "./FacilityNameInput"
import { FacilityGeometryInput } from "./FacilityGeometryInput";
import {FacilityGeolocationInput} from "./FacilityGeolocationInput"
/**
 * Editable Facility Attributes component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.facility - The facility object.
 * @param {Object} props.actions - The actions for modifying the facility.
 * @returns {JSX.Element} The facility editable attributes.
 */
export const FacilityAttributesEditable = ({facility, actions}) => {
    return (
        <Card className="mnk">
            <Card.Header>
                <div className = "card-edit">
                        Facility: {facility.name}
                </div>      
            </Card.Header>
            <Card.Body className = "edit-body">
    <Row>
        <Col md={2}><b>Name</b></Col>
        <Col md={10}>
            <FacilityNameInput facility={facility} actions={actions} />
        </Col>
    </Row>

    <Row>
        <Col md={2}><b>Type</b></Col>
        <Col md={10}>
            <FacilityTypeInput facility={facility} actions={actions} />
        </Col>
    </Row>

    <Row>
        <Col md={2}><b>Geometry</b></Col>
        <Col md={10}>
            <FacilityGeometryInput facility={facility} actions={actions} />
        </Col>
    </Row>
    <Row>
        <Col md={2}><b>Geolocation</b></Col>
        <Col md={10}>
            <FacilityGeolocationInput facility={facility} actions={actions} />
        </Col>
    </Row>
</Card.Body>
        </Card>

    )
}