import { authorizedFetch } from 'queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const FacilityQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityQueryLargeJSON(id)),
    })