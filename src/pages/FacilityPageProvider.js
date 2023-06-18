import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FacilityLarge } from 'components/FacilityLarge';
import { actions } from './AppProvider';

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const FacilityPageProvider = ({id}) => {

    //vyber vsech nemovitosti ze store
    const facilities = useSelector(state => state.facilities)
   
    //vyber nemovitost ze store, ktera ma byt zobrazena
    const facility = facilities[id] //|| {id: id}
    console.log(facilities)
    
    useEffect(
        () => {
            console.log('FacilityPageProvider refetch ' + id)
            actions.FacilityFetch(id)         
        }, []
    )

    if (facility) {

        //nemovitost je ve store
        return (          
            <FacilityLarge facility={facility} actions={actions}/>       
        )
    } else {
        
        return (
            <div>Loading... {id}, {facility}</div>
        )
    }
}
