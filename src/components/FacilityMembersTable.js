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
                <tr>
                    <th className="table-danger" colSpan={5}>Do not make rows editable, just add, remove ...</th>
                </tr>
            </thead>
            <tbody>
                {facility?.subFacilities?.map(
                    (m, index) => <FacilityMemberTableRow key={m.id} subFacility={m} index={index + 1} actions={actions} gid={facility.id}/>
                )}
            </tbody>
        </table>
    )
}