import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { bindFacilityActions } from 'reducers/_main';
import { FacilityReducer } from 'reducers/Facilityreducers'; 

/**
 * Toto je hlavni store pro celou aplikaci. Zde zacleneno pro demonstraci. 
 */
export const store = configureStore(
    { 
        reducer: {
            facilities: FacilityReducer
        }, 
        preloadedState: {
            facilities: {}
        }
})

const dispatch = store.dispatch

/**
 * Vsechny akce / callbacky pro celou aplikaci
 * Lze je kdekoliv importovat a vyuzit. 
 * Je ovsem zadouci, aby se tyto dostaly ke "spodnim" komponentam pres props.
 * Tim se zabezpeci jejich "purity" (nejsou zavisle na globalnich parametrech)
 */
export const actions = {
    ...bindFacilityActions(dispatch)
}

/**
 * Zapouzdruje vnorene komponenty a umoznuje jim vyuzivat store - centralni data
 */
export const AppProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}