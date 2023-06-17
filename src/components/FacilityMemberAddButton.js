import { useState } from 'react';
import { v1 } from 'uuid';
import { AddButton } from './AddButton';
import { BsHouseAddFill } from 'react-icons/bs';

export const FacilityMemberAddButton = ({ facility, actions }) => {
  // Define state for the new member
  const [newMember, setNewMember] = useState({
    id: '',
    name: '',
    lastchange: null,
    geometry: null,
    geolocation: null,
    valid: "true",
    nameEn: "",
    address: "",
    label: null,
    type: {
      id: '',
      name: ''
    },
    masterFacility: {
      id: facility.id,
      name: facility.name
    },
    subFacilities: {
      id: '',
      name: ''
    }
  });

  // Function to handle adding a new member
  const handleAddMember = () => {
    const FacilityId = facility.id
    // Create a new member object with a unique ID
    const member = {
      id: v1(), // Generate a unique ID using uuid.v1()
      name: newMember.name,
      facilitytypeId: "76421cf8-a7a0-11ed-b76e-0242ac110002",
      masterFacilityId: facility.id,
      valid: true
    };
    // Call the provided onFacilityMemberAdd action with the facility ID and the new member
    actions.onFacilityMemberAdd({ FacilityId, member });
    // Call the FacilityAsyncInsert action with the new member
    actions.FacilityAsyncInsert(member);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    // Update the corresponding field in the newMember state
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Input field for entering the member's name */}
      <input className="inputBtn"
        type="text"
        name="name"
        placeholder="Enter name"
        value={newMember.name}
        onChange={handleChange}
      />
      {/* Button for adding a new member */}
      <AddButton onClick={handleAddMember}>
        <BsHouseAddFill />
      </AddButton>
    </div>
  )
}
