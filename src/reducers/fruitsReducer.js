const fruitsReducer = (state={fruits: [], loading: false}, action) => { 
    switch (action.type) {
        case 'LOADING_ALLFRUIT':
            return {
                ...state, 
                fruits: [...state.fruits],
                loading: true
            }
  

        case 'ALLFRUIT_LOADED':
            return {
                ...state,
                fruits: action.fruits,
                loading: false
            }

        default: 
        return state
    }
}

export default fruitsReducer