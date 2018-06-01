
let defaultState = {
    searchResults: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === 'SET_SEARCH_RESULTS') {
        return {
            ...state,
            searchResults: action.payload
        }
    }else{
        return {
            ...state
        }
    }
}



export default mainReducer;