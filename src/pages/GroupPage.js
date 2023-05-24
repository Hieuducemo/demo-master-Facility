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
/*
    const onDeleteMember = (u) => {
        const filteredMembers = Facility.memberships.filter(
            (user) => user.id !== u.id
        )
        const newState = {...Facility, memberships: filteredMembers}
        setFacility(newState)
        console.log(filteredMembers)
    }

    const onEmailChange = (id, email) => {
        const updatedMembers = Facility.memberships.map(
            (user) => user.id !== id ? user : {...user, email: email}
        )
        const newState = {...Facility, memberships: updatedMembers}
        setFacility(newState)
        console.log(updatedMembers)
    }

    const onUserUpdate = (u) => {
        const updatedMembers = Facility.memberships.map(
            (user) => user.id !== u.id ? user : {...user, ...u}
        )
        const newState = {...Facility, memberships: updatedMembers}
        setFacility(newState)
        console.log(updatedMembers)
    }

    const actions = {
        onDeleteMember: onDeleteMember,
        onEmailChange: onEmailChange,
        onUserUpdate: onUserUpdate
    }

    if (Facility) {
        return (
            <>
            <FacilityMembersCard Facility={Facility} actions={actions}/>
            </>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }*/
}
