import { FacilityActions } from "./Facilityreducers"
import { FacilityFetch, FacilityTypeAsyncUpdate,FacilityAsyncUpdate,FacilityGeoMAsyncUpdate,FacilityGeoLAsyncUpdate} from "./FacilityAsyncActions"
import {FacilityAsyncInsert} from "./FacilityAsyncActions"
import { FacilityAsyncDelete } from "./FacilityAsyncActions"

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

        FacilityFetch: (id) => dispatch(FacilityFetch(id)),
        
       /* FacilityFakeFetch: (id) => dispatch(FacilityFakeFetch(id)),    */
        FacilityAsyncUpdate: (facility) => dispatch(FacilityAsyncUpdate(facility)),
        FacilityTypeAsyncUpdate: (payload) => {dispatch(FacilityTypeAsyncUpdate(payload))}, 
        FacilityGeoMAsyncUpdate:(facility)=>dispatch(FacilityGeoMAsyncUpdate(facility)), 
        FacilityGeoLAsyncUpdate:(facility)=>dispatch(FacilityGeoLAsyncUpdate(facility)), 
        FacilityAsyncInsert:(facility)=>dispatch(FacilityAsyncInsert(facility)), 
        FacilityAsyncDelete:(facility)=>dispatch(FacilityAsyncDelete(facility))
        
       /* FacilityAsyncTypeUpdate:(facility) => dispatch(FacilityAsyncTypeUpdate(facility))*/
    }
}