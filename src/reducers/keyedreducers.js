

/**
 * Stavova funkce nad dict, maze prvek
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const DeleteItem = (state, action) => {
    const item = action.payload;
    delete state[item.id]
    return state
}

/**
 * Stavova funkce nad dict, dela update
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const UpdateItem = (state, action) => {
    console.log("vola funckci update")
    const newItem = action.payload;
    const oldItem = state[newItem.id]
    state[newItem.id] = {...oldItem, ...newItem}
    console.log("newItem",newItem.id)
    console.log("updateItem",oldItem,newItem)
    return state
}    

/**
 * Stavova funkce nad dict, pracude s klicem selectedId
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const SelectItem = (state, action) => {
    const item = action.payload
    state.selectedId = item.id

    return state
}