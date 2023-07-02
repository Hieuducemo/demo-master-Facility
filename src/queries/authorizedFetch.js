const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}

/**
 * Wrapper function for the fetch API, creating a communication layer with the server.
 *
 * @param {Object} params - Additional parameters to customize the fetch request.
 * @returns {Promise<Response>} A promise representing the response to the fetch request.
 */
export const authorizedFetch = (params) => {
    const newParams = {...globalFetchParams, ...params} // allow owerwrite default parameters (globalFetchParams)
    const overridenPath = '/api/gql'
    return (
        fetch(overridenPath, newParams) 
    )
}
