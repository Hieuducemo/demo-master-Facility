import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * stavova funkce, ktera pridat uzivatele ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

const FacilityMemberAdd = (state, action) => {
  console.log('volani stavove funkce, add')
  const g = action.payload.FacilityId
  const newMember = action.payload.member
  console.log("php", g)
  const facility = state[g]
  facility.subFacilities.push(newMember)
  return state
}

/**
 * stavova funkce, ktera odebere uzivatele ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const FacilityMemberRemove = (state, action) => {
    console.log('volani stavove funkce, smazat uzivatele')
    const g = action.payload.facility
    const u = action.payload.subFacility
    console.log("pp",u)
    const facility = state[g.id]
    facility.subFacilities = facility.subFacilities.filter(subFacility => subFacility.id !== u.id)
    return state
}

/**
 * Stavova funkce, ktera provede update uzivatele ve skupine
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
  const FacilityMemberUpdate = (state, action) => {
    const g = action.payload.facility
    const u = action.payload.subFacility
    console.log("ff",u)
    const facility = state[g.id]
      facility.subFacilities = facility.subFacilities.map(subFacility =>
        subFacility.id === u.id ? { ...subFacility, name: u.name, geometry:u.geometry,geolocation:u.geolocation} : subFacility
      )
    return state
    
  }
  
 /**
 * Stavova funkce, ktera provede update type ve skupine
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */

 const FacilityTypeUpdate = (state, action) => {
  console.log("volani funkce type update")
  const g = action.payload.facility  
  const Type = action.payload.newType
  const facility = state[g.id]
  console.log("type",Type)
  facility.type = { ...facility.type, id: Type.id, name: Type.name }
  return state
}

  

  

/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */
export const FacilitySlice = createSlice({
    name: 'Facilitys',
    initialState: {},
    reducers: {
        Facility_add: CreateItem,
        Facility_delete: DeleteItem,
        Facility_replace: ReplaceItem,
        Facility_update: UpdateItem,
        Facility_select: SelectItem,

        Facility_memberRemove: FacilityMemberRemove,
        Facility_memberUpdate: FacilityMemberUpdate, 
        Facility_memberAdd: FacilityMemberAdd,
        Facility_TypeUpdate:FacilityTypeUpdate
    }
})

//z rezu odvozene akce
export const FacilityActions = FacilitySlice.actions
//z rezu odvozeny stavovy automat
export const FacilityReducer = FacilitySlice.reducer