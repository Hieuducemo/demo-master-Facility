import { FacilityActions } from "./Facilityreducers" 

import { FacilityQuerySmall } from "queries/FacilityQuerySmall"
import { FacilityQueryLarge } from "queries/FacilityQueryLarge"
import { FacilityType } from "queries/Typequery"
import { fakeQueryFacility }  from 'queries/fakequeryFacility'
import { authorizedFetch } from "queries/authorizedFetch"
/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const FacilityFetchHelper = (id, query, resultselector, dispatch, getState) => {
    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }

    const p = query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        // .then(
        //     response => log('received')(response.json()),
        //     error => error
        //     //error
        //     )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(FacilityActions.Facility_update(json))),
            error => error
        )

    return p
}

/**
 * Fetch the Facility from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const FacilityFetch = (id) => (dispatch, getState) => {
    const FacilitySelector = (json) => json.data.facilityById
    const bodyfunc = async () => {
        let facilityData = await FacilityFetchHelper(id, FacilityQueryLarge, FacilitySelector, dispatch, getState)
        
        if (facilityData.type !== "764217ee-a7a0-11ed-b76e-0242ac110002") {
            facilityData = await FacilityFetchHelper(id, FacilityQueryLarge, FacilitySelector, dispatch, getState)
        }
        return facilityData
    }
    return bodyfunc()
}

export const FacilityTypeFetch = (id) => (dispatch, getState) => {
    const FacilityTypeSelector = (json) => json.data.facilityTypeById
    const bodyfunc = async () => {
        let facilityData = await TypeFetchHelper(id, FacilityType, FacilityTypeSelector, dispatch, getState)
        
        if (facilityData.type !== "764217ee-a7a0-11ed-b76e-0242ac110002") {
            facilityData = await TypeFetchHelper(id, FacilityType, FacilityTypeSelector, dispatch, getState)
        }
        return facilityData
    }
    return bodyfunc()
}

/**
 * Fetch the Facility from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */

export const TypeFetchHelper=(query, selector, dispatch,getState)=>{
    const log  = (text) =>(p)=>{
      console.log(text)
      console.log(JSON.stringify(p))
      return p 
    }
    const p = query()
    .then(
        response=>response.json(), 
        error => error
    )
    .then(
        (i)=>log('incoming')(i)
    )
    .then(
        json=>log('converted')(selector(json)),
        error=>error
    ).then(
        json=>log('dispatching')(dispatch(FacilityActions.Facility_TypeUpdate(json))),
        error=>error
    )
    return p 
}
/*export const FacilityFakeFetch = (id) => (dispatch, getState) => {
    console.log('FacilityFakeFetch')
    const FacilitySelector = (json) => json.facilityById
    const bodyfunc = async () => {
        let facilityData = await FacilityFetchHelper(id, fakeQueryFacility, FacilitySelector, dispatch, getState)
        dispatch(FacilityActions.Facility_select(facilityData))
        return facilityData
    }
    return bodyfunc()
}*/

export const FacilityTypeAsyncUpdate = ({id,lastchange,facilitytypeId,facility}) => (dispatch, getState) => {
    const FacilityMutationJSON = (facility) => {
        return {
            query: `mutation ($id: ID!, $lastchange: DateTime!, $facilitytypeId: ID!) {
                facilityUpdate
                (facility: 
                    {id: $id, lastchange: $lastchange, facilitytypeId: $facilitytypeId}) {
                  id                
                  msg
                  facility {
                    id
                    lastchange                   
                  }
                }
              }`,
            variables: facility
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(FacilityMutationJSON({id,lastchange,facilitytypeId}))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.facilityUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.facilityUpdate.facility.lastchange
                    dispatch(FacilityActions.Facility_update({...facility,lastchange: lastchange}))
                }
                return json
            }
        )   
}

export const FacilityAsyncUpdate = (facility) => (dispatch, getState) => {
    const FacilityMutationJSON = (facility) => {
        return {
            query: `mutation ($id: ID!, $name: String!, $lastchange: DateTime!) {
                facilityUpdate
                (facility: 
                    {id: $id, name: $name, lastchange: $lastchange}) {
                  id
                  msg
                  facility {
                    id
                    lastchange                  
                  }
                }
              }`,
            variables: facility
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(FacilityMutationJSON(facility))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.facilityUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.facilityUpdate.facility.lastchange
                    dispatch(FacilityActions.Facility_update({...facility, lastchange: lastchange}))
                }
                return json
            }
        )   
}

export const FacilityGeoMAsyncUpdate = (facility) => (dispatch, getState) => {
    const FacilityMutationJSON = (facility) => {
        return {
            query: `mutation ($id: ID!, $geometry: String!, $lastchange: DateTime!) {
                facilityUpdate
                (facility: 
                    {id: $id, geometry: $geometry, lastchange: $lastchange}) {
                  id
                  msg
                  facility {
                    id
                    lastchange                  
                  }
                }
              }`,
            variables: facility
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(FacilityMutationJSON(facility))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.facilityUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.facilityUpdate.facility.lastchange
                    dispatch(FacilityActions.Facility_update({...facility, lastchange: lastchange}))
                }
                return json
            }
        )   
}

export const FacilityGeoLAsyncUpdate = (facility) => (dispatch, getState) => {
    const FacilityMutationJSON = (facility) => {
        return {
            query: `mutation ($id: ID!, $geolocation: String!, $lastchange: DateTime!) {
                facilityUpdate
                (facility: 
                    {id: $id, geolocation: $geolocation, lastchange: $lastchange}) {
                  id
                  msg
                  facility {
                    id
                    lastchange                  
                  }
                }
              }`,
            variables: facility
            }
        }

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(FacilityMutationJSON(facility))
    }


    return fetch('/api/gql', params)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const msg = json.data.facilityUpdate.msg
                if (msg === "fail") {
                    console.log("Update selhalo")
                } else {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    const lastchange = json.data.facilityUpdate.facility.lastchange
                    dispatch(FacilityActions.Facility_update({...facility, lastchange: lastchange}))
                }
                return json
            }
        )   
}
