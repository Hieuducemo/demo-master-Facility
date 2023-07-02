import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FacilityLarge } from 'components/FacilityLarge';
import { actions } from './AppProvider';

/**
 * Component that is integrated within the Provider structure, therefore it has access to the store.
 * It imports actions and provides them to its child components.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the facility to be displayed.
 * @returns {JSX.Element} a main table contains map, input boxes, card, tables  
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
