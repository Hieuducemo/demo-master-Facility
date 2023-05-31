import { authorizedFetch } from 'queries/authorizedFetch'

export const FacilityTypeQueryJSON=(id)=>({
    "query":
       `query($id:ID!){
          facilityTypeById(id:$id){
            id 
            name
          }
       }`,
       "variables":{"id":id}
    })

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const FacilityType = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(FacilityTypeQueryJSON(id)),
    
})