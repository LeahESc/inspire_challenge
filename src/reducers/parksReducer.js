const parksReducer = (state={parks: [], loading: false}, action) => { 
    switch (action.type) {
        case 'LOADING_ALLPARKS':
            return {
                ...state, 
                parks: [...state.parks],
                loading: true
            }
  

        case 'ALLPARKS_LOADED':
            return {
                ...state,
                parks: action.parks,
                loading: false
            }

        default: 
        return state
    }
}

export default parksReducer