import { FacilityMemberTableRow } from "./FacilityMemberTableRow"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */

export const FacilityMembersTable = ({facility, actions}) => {
    return (
        <table className="table table-hover table-stripped">
            <thead className="abc">
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