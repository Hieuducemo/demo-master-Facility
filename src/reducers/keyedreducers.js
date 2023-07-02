
/**
 * Reducer function that updates an item in a dictionary state.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object.
 * @param {Object} action.payload - The updated item to replace the existing item in the dictionary.
 * @returns {Object} The new state with the updated item.
 */
export const UpdateItem = (state, action) => {
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    return state
}    
