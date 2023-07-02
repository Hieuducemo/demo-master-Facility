import { FacilityMemberTableRow } from "./FacilityMemberTableRow"

/**
 * Renders a table displaying the list of members.
 *
 * @param {Object} param0 - The props object.
 * @param {Object} param0.facility - The facility object containing the list of subFacilities.
 * @param {Object} param0.actions - The actions object for performing actions on the members.
 * @returns {JSX.Element} a row contains facility's information.
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
         {facility?.subFacilities?.map((m) => (
        // Iterate over subFacilities array and render FacilityMemberTableRow component for each subFacility
        <FacilityMemberTableRow key={m.id} subFacility={m} actions={actions} gid={facility.id} />
    ))}
</tbody>

        </table>
    )
}