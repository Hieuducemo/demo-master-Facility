import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import { authorizedFetch } from "queries/authorizedFetch";
import { Search, XLg } from "react-bootstrap-icons";



export const FacilitysBy3LettersQueryJSON = (letters) => ({
    "query":
        `query($letters: String!) {
            result: facilityByLetters(letters: $letters) {
                id
                name
            }
        }`,
    "variables": {"letters": letters}
})

export const FacilitysBy3LettersQuery = (letters) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilitysBy3LettersQueryJSON(letters)),
    })


const FacilitySugestion = ({facility, onSelect}) => {
    const _onSelect = () => {
        if (onSelect) {
            onSelect(facility)
        }
    }
    return (
        <Col>
            <span style={{cursor: "pointer"}} onClick={_onSelect}>{facility.name}</span>
        </Col>
    )
}

const Suggestions = ({facilityRecords, Suggestion, onSelect}) => {
    if ((facilityRecords.length === 0)) {
        return null
    }

    return (
        <div style={{position: "relative"}}>
            <div style={{position: "absolute", top: "0px", zIndex: "10", width: "100%"}}>
                <Card>
                    <Card.Body>
                        <Row>
                            {facilityRecords.map( 
                                item => <Row><Col key={item.id}>
                                    <Suggestion onSelect={onSelect} facility={item}/>
                                </Col></Row>
                            )}
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export const FacilitySearch = ({onSelect}) => {
    const [ facilityRecords, setFacilityRecords ] =  useState([])
    const [ currentLetters, setCurrentLetters ] =  useState('')


    useEffect(() =>{
        if (currentLetters.length > 2) {
            FacilitysBy3LettersQuery(currentLetters).then(
                response => response.json()
            )
            
            .then(json => json.data)
            .then(hints => {
                if (hints) {
                    setFacilityRecords(() => hints.result)
                }
            })
        }
    }, [currentLetters])

    const [inputValue, setInputValue] = useState('')
    const onChange = (e) => {
        const newValue = e.target.value

        setCurrentLetters(newValue)
        if (newValue.length < 3) {
            setFacilityRecords([])
        }

        setInputValue(newValue)
    }

    const closeSearch = () => {
        setInputValue('')
        setFacilityRecords([])
    }
    
    return (
        <div style={{position: "relative"}}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><Search /></span>
                <input className='form-control' placeholder="Find an estate" aria-label="Vyhledávání prostor" onChange={onChange} value={inputValue}/>
                <span className="input-group-text" id="basic-addon2" onClick={closeSearch}><XLg /></span>
            </div>
            <Suggestions facilityRecords={facilityRecords} Suggestion={FacilitySugestion} onSelect={onSelect}/>
        </div>
    )
}