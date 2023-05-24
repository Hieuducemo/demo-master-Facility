import { authorizedFetch } from 'queries/authorizedFetch'


export const FacilityQuerySmallJSON = (id) => ({
    "query":
        `query ($id: ID!){
            facilityById(id: $id) {
                id
                name
                lastchange
                geometry
                geolocation
                type {
                    id
                    name
                }
                subFacilities {
                    id
                    name
                }
            }
        }`,
    "variables": {"id": id}
})

export const FacilityQuerySmall = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityQuerySmallJSON(id)),
    })
