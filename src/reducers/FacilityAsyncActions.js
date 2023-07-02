import { FacilityActions } from "./Facilityreducers" 
import { FacilityQueryLarge } from "queries/FacilityQueryLarge"

import { authorizedFetch } from "queries/authorizedFetch"
/**
 * Helper function to fetch facility data from the server and update the state.
 *
 * @param {string} id - The ID of the facility to fetch.
 * @param {Function} query - The query function to retrieve facility data.
 * @param {Function} resultselector - The function to extract the relevant data from the response.
 * @param {Function} dispatch - The dispatch function from Redux.
 * @param {Function} getState - The function to retrieve the current state from Redux.
 * @returns {Promise} A promise representing the fetch operation.
 */
// Pomocná funkce pro získání dat o zařízení ze serveru a aktualizaci stavu
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
 * Fetches facility data from the server, verifies its type, and loads detailed data. Finally, it saves the result to the state.
 *
 * @param {string} id - The ID of the facility to fetch.
 * @returns {Promise} A promise representing the fetch operation.
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

/**
 * Inserts a new facility into the system.
 *
 * @param {Object} member - The facility data to insert.
 * @returns {Promise} A promise representing the insert operation.
 */
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


/**
 * Generates the JSON query for updating facility data.
 *
 * @param {Object} facility - The facility data to update.
 * @returns {Object} The update query JSON.
 */
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

/**
 * Updates facility data by sending an asynchronous request to the server.
 *
 * @param {Object} facility - The facility data to update.
 * @returns {Promise<Response>} A Promise that resolves to the server response.
 */
export const FacilityUpdateQuery = (facility) =>
    authorizedFetch('', {
        body: JSON.stringify(FacilityUpdateQueryJSON(facility))
    })

/**
 * Asynchronous action for updating facility data.
 *
 * @param {Object} facility - The facility data to update.
 * @returns {Promise} A Promise that resolves to the server response.
 */
export const FacilityUpdateAsyncAction = (facility) => (dispatch, getState) => {
    return FacilityUpdateQuery(facility)
        .then(
            resp => resp.json()
        )
        .then(
            json => {
                const newFacility = json?.data?.result?.facility
                if (newFacility) {
                    dispatch(FacilityActions.Facility_update({...newFacility}))
                }
                return json
            }
        )   
}
