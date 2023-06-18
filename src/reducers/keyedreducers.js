
/**
 * Stavova funkce nad dict, dela update
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const UpdateItem = (state, action) => {
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    return state
}    
