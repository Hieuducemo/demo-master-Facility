import { authorizedFetch } from 'queries/authorizedFetch'

/**
 * Maps the ID to a JSON object representing the "large" (detailed) query to the server.
 *
 * @param {string} id - The ID of the facility.
 * @returns {Object} The JSON object representing the facility query.
 */
export const FacilityQueryLargeJSON = (id) => ({
    "query":
        `query($id: ID!) {
            facilityById(id: $id) {
                id
                name
                lastchange
                geometry
                geolocation
                valid
                type {
                    id
                    name
                }
                masterFacility {
                    id
                    name
                }
                subFacilities {
                    id
                    name
                    valid
                    lastchange
                    geometry
                    geolocation
                    type{
                        id 
                        name
                    }
                }
            }
        }`,
    "variables": {"id": id}
})

/**
 * Executes the query to the server using authorizedFetch (wrapper function).
 *
 * @param {string} id - The ID of the facility.
 * @returns {Promise<Response>} A promise representing the response to the fetch request.
 */
export const FacilityQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityQueryLargeJSON(id)),
    })