import { FacilityActions } from "./Facilityreducers"
import { FacilityFetch, FacilityUpdateAsyncAction} from "./FacilityAsyncActions"
import {FacilityAsyncInsert} from "./FacilityAsyncActions"

/**
 * Binds facility actions to the dispatch function, ensuring that they are properly executed when called.
 * Includes both synchronous and asynchronous actions.
 *
 * @param {Function} dispatch - The dispatch function from Redux.
 * @returns {Object} An object containing the bound facility actions.
 */
export const bindFacilityActions = (dispatch) => {
    return {
        onFacilityUpdate: (g) => dispatch(FacilityActions.Facility_update(g)),
    
        onFacilityMemberRemove: ({subFacility, facility}) => 
        dispatch(FacilityActions.Facility_memberRemove({subFacility, facility})),
        onFacilityMemberAdd: ({FacilityId,member}) => 
        dispatch(FacilityActions.Facility_memberAdd({FacilityId,member})),
        
        FacilityUpdateAsyncAction: (facility) => dispatch(FacilityUpdateAsyncAction(facility)),
        FacilityFetch: (id) => dispatch(FacilityFetch(id)),
        FacilityAsyncInsert:(facility)=>dispatch(FacilityAsyncInsert(facility)), 
        
    }
}