import { FacilityActions } from "./Facilityreducers"
import { FacilityFetch, FacilityUpdateAsyncAction} from "./FacilityAsyncActions"
import {FacilityAsyncInsert} from "./FacilityAsyncActions"


/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch 
 * @returns 
 */
export const bindFacilityActions = (dispatch) => {
    return {
        onFacilityUpdate: (g) => dispatch(FacilityActions.Facility_update(g)),
    
        onFacilityMemberRemove: ({subFacility, facility}) => dispatch(FacilityActions.Facility_memberRemove({subFacility, facility})),
        onFacilityMemberAdd: ({FacilityId,member}) => dispatch(FacilityActions.Facility_memberAdd({FacilityId,member})),
        
        FacilityUpdateAsyncAction: (facility) => dispatch(FacilityUpdateAsyncAction(facility)),
        FacilityFetch: (id) => dispatch(FacilityFetch(id)),
        FacilityAsyncInsert:(facility)=>dispatch(FacilityAsyncInsert(facility)), 
        
    }
}