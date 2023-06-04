import { useState } from 'react';
import { v1 } from 'uuid';
import {AddButton} from './AddButton'


export const FacilityMemberAddButton = ({ facility, actions }) => {
  const [newMember, setNewMember] = useState({
    id: '',
    name: '',
    lastchange:null,
    geometry:null, 
    geolocation:null, 
    valid:"true", 
    nameEn:"", 
    address:"", 
    label:null,
    type:{
      id:'', 
      name:''
    }, 
    masterFacility:{
      id:facility.id,
      name:facility.name
    }, 
    subFacilities:{
      id:'',
      name:''
    }
  })

  const handleAddMember = () => {
    const FacilityId = facility.id; 
    const member = {
      id: v1(),
      name: newMember.name,
      facilitytypeId:"76421cf8-a7a0-11ed-b76e-0242ac110002", 
      masterFacilityId:facility.id
    }
    console.log("heo",FacilityId)
    actions.onFacilityMemberAdd({FacilityId, member})
    actions.FacilityAsyncInsert(member)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }))
  }

  return (
    <div>
      <input type="text" name="name" placeholder="Enter name" value={newMember.name} onChange={handleChange} />
      <AddButton onClick={handleAddMember}>Add Subfacility</AddButton>
    </div>
  );
};


