import { useState, useEffect } from 'react';
import { FacilityMembersCard } from 'components/FacilityMembersCard';
import { fakeQueryFacility } from 'queries/fakequeryFacility';
import { useSelector } from 'react-redux';

export const FacilityPage = ({id}) => {
    const [Facility, setFacility] = useState(null)
    const Facilitys=useSelector(state =>state.Facilitys)
    useEffect(
        () => {
            fakeQueryFacility(id)
                .then(response => response.json())    
                .then((json) => setFacility(json))
        }, [id]
    )
}
