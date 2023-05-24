import { FacilityActions } from "./Facilityreducers"
import { FacilityFetch, FacilityFakeFetch, FacilityAsyncUpdate } from "./FacilityAsyncActions"


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
    
        onFacilityMemberRemove: ({subFacility, facility}) => dispatch(FacilityActions.Facility_memberRemove({subFacility, facility})),
        onFacilityMemberUpdate: (payload) => dispatch(FacilityActions.Facility_memberUpdate(payload)),
        onFacilityMemberAdd: ({FacilityId,member}) => dispatch(FacilityActions.Facility_memberAdd({FacilityId,member})),
        onFacilityTypeUpdate: ({facility,newType}) =>dispatch(FacilityActions.Facility_TypeUpdate({facility, newType})),

        FacilityFetch: (id) => dispatch(FacilityFetch(id)),
        
        FacilityFakeFetch: (id) => dispatch(FacilityFakeFetch(id)),    
       
        FacilityAsyncUpdate: (facility) => dispatch(FacilityAsyncUpdate(facility))
    }
}