import { FacilityMemberTableRow } from "./FacilityMemberTableRow"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */
export const FacilityMembersTable = ({facility, actions}) => {
    console.log(facility.subFacilities)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Geometry</th>
                    <th>Geolocation</th>
                    <th>Nástroje</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {facility?.subFacilities?.map(
                    (m) => <FacilityMemberTableRow key={m.id} subFacility={m}  actions={actions} gid={facility.id}/>
                )}
            </tbody>
        </table>
    )
}