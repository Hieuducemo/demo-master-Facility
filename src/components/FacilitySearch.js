import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useEffect, useState } from "react";
import { authorizedFetch } from "queries/authorizedFetch";
import { Search, XLg } from "react-bootstrap-icons";

// JSON object for the facility query
export const FacilitysBy3LettersQueryJSON = (letters) => ({
  "query": `query($letters: String!) {
    result: facilityByLetters(letters: $letters) {
      id
      name
    }
  }`,
  "variables": { "letters": letters }
});

// Function to execute the facility query
export const FacilitysBy3LettersQuery = (letters) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(FacilitysBy3LettersQueryJSON(letters)),
  });

// Component for displaying a facility suggestion
const FacilitySugestion = ({ facility, onSelect }) => {
  const _onSelect = () => {
    if (onSelect) {
      onSelect(facility);
      setSelectedSuggestion(facility);
    }
  };

  return (
    <Col key={facility.id}>
      <span style={{ cursor: "pointer" }} onClick={_onSelect}>
        {facility.name}
      </span>
    </Col>
  );
};

// Component for displaying the suggestions
const Suggestions = ({ facilityRecords, Suggestion, onSelect }) => {
  if (facilityRecords.length === 0) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "0px", zIndex: "10", width: "100%" }}>
        <Card>
          <Card.Body>
            <Row>
              {facilityRecords.map(item => (
                <Suggestion key={item.id} onSelect={onSelect} facility={item} />
              ))}
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// Component for the facility search
export const FacilitySearch = ({ onSelect }) => {
  const [facilityRecords, setFacilityRecords] = useState([]);
  const [currentLetters, setCurrentLetters] = useState('');

  useEffect(() => {
    // Fetch facility records when the length of currentLetters is greater than 2
    if (currentLetters.length > 2) {
      FacilitysBy3LettersQuery(currentLetters)
        .then(response => response.json())
        .then(json => json.data)
        .then(hints => {
          if (hints) {
            setFacilityRecords(hints.result);
          }
        });
    }
  }, [currentLetters]);

  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    // Get the new value from the input field
    const newValue = e.target.value;
  
    // Update the current letters state
    setCurrentLetters(newValue);
  
    // Clear the facility records if the new value has fewer than 3 characters
    if (newValue.length < 3) {
      setFacilityRecords([]);
    }
  
    // Set the input value
    setInputValue(newValue);
  };
  

  const closeSearch = () => {
    // Reset the search input value
    setInputValue("");
    // Clear the facility records
    setFacilityRecords([]);
  };
  
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