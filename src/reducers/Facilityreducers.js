import { createSlice } from '@reduxjs/toolkit'

import {  DeleteItem, UpdateItem } from './keyedreducers';

/**
 * stavova funkce, ktera pridat nemovitost ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const FacilityMemberAdd = (state, action) => {
  console.log('volani stavove funkce, add')
  const g = action.payload.FacilityId
  const newMember = action.payload.member
  const facility = state[g]
  facility.subFacilities.push(newMember)
  return state
}

/**
 * stavova funkce, ktera odebere nemovitost ze skupiny 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const FacilityMemberRemove = (state, action) => {
    console.log('volani stavove funkce, smazat uzivatele')
    const g = action.payload.facility
    const u = action.payload.subFacility
    const facility = state[g.id]
    facility.subFacilities = facility.subFacilities.filter(subFacility => subFacility.id !== u.id)
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
        Facility_delete: DeleteItem,
        Facility_update: UpdateItem,
        
        Facility_memberRemove: FacilityMemberRemove,
        Facility_memberAdd: FacilityMemberAdd   
    }
})

//z rezu odvozene akce
export const FacilityActions = FacilitySlice.actions
//z rezu odvozeny stavovy automat
export const FacilityReducer = FacilitySlice.reducer
