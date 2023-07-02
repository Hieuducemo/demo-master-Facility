import { createSlice } from '@reduxjs/toolkit'
import { UpdateItem } from './keyedreducers';

/**
 * Reducer function that adds a facility member to a group.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @param {string} action.payload.FacilityId - The ID of the facility group.
 * @param {Object} action.payload.member - The facility member to add.
 * @returns {Object} The new state with the added facility member.
 */
const FacilityMemberAdd = (state, action) => {
  const g = action.payload.FacilityId
  const newMember = action.payload.member
  const facility = state[g]
  facility.subFacilities.push(newMember)
  return state
}

/**
 * Reducer function that removes a facility member from a group.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @param {Object} action.payload.facility - The facility containing the member to remove.
 * @param {Object} action.payload.subFacility - The facility member to remove.
 * @returns {Object} The new state with the removed facility member.
 */
const FacilityMemberRemove = (state, action) => {
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
        Facility_update: UpdateItem,

        Facility_memberRemove: FacilityMemberRemove,
        Facility_memberAdd: FacilityMemberAdd   
    }
})

//z rezu odvozene akce
export const FacilityActions = FacilitySlice.actions
//z rezu odvozeny stavovy automat
export const FacilityReducer = FacilitySlice.reducer
