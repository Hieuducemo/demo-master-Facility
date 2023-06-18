import { FacilityActions } from "./Facilityreducers" 
import { FacilityQueryLarge } from "queries/FacilityQueryLarge"

import { authorizedFetch } from "queries/authorizedFetch"

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

export const FacilityAsyncInsert = (member)=>(dispatch,getState)=>{
    const FacilityMutationJSON =(member)=>{
        return{
            query: `mutation ($name:String!,
                  $facilitytypeId:ID!,
                  $id:ID!,
                  $masterFacilityId:ID!
                  ){
                    facilityInsert(facility:{
                        name:$name,
                        facilitytypeId:$facilitytypeId, 
                        id:$id, 
                        masterFacilityId:$masterFacilityId,       
                    })
                    {
                        msg            
                    }
                  }
            `, 
            variables: member
        }
    }
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(FacilityMutationJSON(member))
    }
    return fetch('/api/gql', params)
}



const FacilityUpdateQueryJSON = (facility) => {
    return {
        query: `mutation(
            $id: ID!
          $lastchange: DateTime!
          $name: String
          $facilitytype_id: ID
          $nameEn: String
          $label: String
          $address: String
          $valid: Boolean
          $capacity: Int
          $geometry: String
          $geolocation: String
          $master_facility_id: ID
          ) {
        result: facilityUpdate(facility: {
              id: $id
          lastchange: $lastchange
          name: $name
          facilitytypeId: $facilitytype_id
          nameEn: $nameEn
          label: $label
          address: $address
          valid: $valid
          capacity: $capacity
          geometry: $geometry
          geolocation: $geolocation
          masterFacilityId: $master_facility_id
        }) {
          id
          msg
          facility {
            id
            lastchange
            name
            type { id name }
            nameEn
            label
            address
            valid
            capacity
            geometry
            geolocation
            masterFacility { id name }
          }
        }
      }`,
        variables: {
            ...facility, 
            master_facility_id: facility?.master_facility_id,
            facilitytype_id: facility?.facilitytype_id
        }
        }
    }

export const FacilityUpdateQuery = (facility) =>
    authorizedFetch('', {
        body: JSON.stringify(FacilityUpdateQueryJSON(facility))
    })

export const FacilityUpdateAsyncAction = (facility) => (dispatch, getState) => {
    return FacilityUpdateQuery(facility)
    //return authorizedFetch('/api/gql', params)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const newFacility = json?.data?.result?.facility
                if (newFacility) {
                    //mame hlasku, ze ok, musime si prebrat token (lastchange) a pouzit jej pro priste
                    dispatch(FacilityActions.Facility_update({...newFacility}))
                }
                return json
            }
        )   
}