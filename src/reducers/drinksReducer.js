const drinksReducer = (state={drinks: [], loading: false}, action) => { 
    switch (action.type) {
        case 'LOADING_DRINKS':
            return {
                ...state, 
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

export default drinksReducer