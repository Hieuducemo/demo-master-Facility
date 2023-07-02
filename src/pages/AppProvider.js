import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { bindFacilityActions } from 'reducers/_main';
import { FacilityReducer } from 'reducers/Facilityreducers'; 
/**
 * The Redux store for the application.
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
 * All the actions/callbacks for the application.
 * They can be imported and used anywhere.
 */
export const actions = {
    ...bindFacilityActions(dispatch)
}

/**
 * Wraps the nested components and provides the Redux store.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The nested components.
 * @returns {JSX.Element} facility store provided by AppProvider. 
 */
export const AppProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}