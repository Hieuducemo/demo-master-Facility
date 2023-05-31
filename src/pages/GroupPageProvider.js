import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FacilityMembersCard } from 'components/FacilityMembersCard';
import { FacilityLarge } from 'components/FacilityLarge';

import { fakeQueryFacility } from 'queries/fakequeryFacility';
import { FacilityFetch } from 'reducers/FacilityAsyncActions';
import { actions } from './AppProvider';

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const FacilityPageProvider = ({id}) => {

    //vyber vsech skupin ze store
    const facilities = useSelector(state => state.facilities)
    //vyber idcka u skupiny, ktere bylo vybrano
    const selectedId = useSelector(state => state.facilities.selectedId)
    //vyber skupiny ze store, ktera ma byt zobrazena
    const facility = facilities[id] //|| {id: id}
    console.log(facilities)
    console.log('jujj',facility)  
    //console.log(Facility)
    
    
    useEffect(
        () => {
            console.log('FacilityPageProvider refetch ' + id)
            actions.FacilityFetch(id)
                     
        }, [id, selectedId]
    )

    if (facility) {
        //skupina je ve store
        return (          
            <FacilityLarge facility={facility} actions={actions}/>       
        )
    } else {
        
        return (
            <div>Loading... {id}, {facility}</div>
        )
    }
}