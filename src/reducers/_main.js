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
        onFacilityAdd: (g) => dispatch(FacilityActions.Facility_add(g)),
        onFacilityDelete:(g)=>dispatch(FacilityActions.Facility_delete(g)),
    
        onFacilityMemberRemove: ({subFacility, facility}) => dispatch(FacilityActions.Facility_memberRemove({subFacility, facility})),
        onFacilityMemberUpdate: (payload) => dispatch(FacilityActions.Facility_memberUpdate(payload)),
        onFacilityMemberAdd: ({FacilityId,member}) => dispatch(FacilityActions.Facility_memberAdd({FacilityId,member})),
        onFacilityTypeUpdate: ({facility,newType}) =>dispatch(FacilityActions.Facility_TypeUpdate({facility,newType})),

        FacilityUpdateAsyncAction: (facility) => dispatch(FacilityUpdateAsyncAction(facility)),

        FacilityFetch: (id) => dispatch(FacilityFetch(id)),
        

        FacilityAsyncInsert:(facility)=>dispatch(FacilityAsyncInsert(facility)), 
        FacilityAsyncDelete:(facility)=>dispatch(FacilityAsyncDelete(facility))
        
      
    }
}