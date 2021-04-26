const fetchDrinks = () => { 
    return (dispatch) => { 
        dispatch({ type:'LOADING_DRINKS'})
        fetch(`/api/json/v1/1/filter.php?c=Cocktail`)
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'DRINKS_LOADED', drinks: data })
        })
    }
}

export default fetchDrinks

// const fetchDrinks = (query) => { 
//     return (dispatch) => { 
//         dispatch({ type:'LOADING_DRINKS'})
//         fetch(`/api/json/v1/1/filter.php?i=${query}`)
//         .then(response => response.json())
//         .then(data => {
//             return dispatch({ type:'DRINKS_LOADED', drinks: data })
//         })
//     }
// }