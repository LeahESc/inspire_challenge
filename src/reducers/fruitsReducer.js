const fruitsReducer = (state={fruits: [], drinks: [], loading: false}, action) => { 
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

            case 'LOADING_DRINKS':
                return {
                    ...state, 
                    fruits: [...state.fruits],
                    drinks: [...state.drinks],
                    loading: true
                }
      
    
            case 'DRINKS_LOADED':
                return {
                    ...state,
                    drinks: action.drinks,
                    loading: false
                }

        default: 
        return state
    }
}

export default fruitsReducer