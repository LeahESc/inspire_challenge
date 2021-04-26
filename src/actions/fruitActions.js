const fetchAllFruits = () => { 
    return (dispatch) => { 
        dispatch({ type:'LOADING_ALLFRUIT'})
        fetch('/api/fruit/all')
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'ALLFRUIT_LOADED', fruits: data })
        })
    }
}

export default fetchAllFruits