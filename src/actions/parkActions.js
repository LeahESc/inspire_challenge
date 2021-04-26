

const fetchAllParks = () => { 
    const key = 'hREloscdhIwvolviZMmxmhnpRlnuIEqOb3XvBu'
    return (dispatch) => { 
        dispatch({ type:'LOADING_ALLFRUIT'})
        fetch(`/api/v1/parks?limit=510&api_key=${key}`)
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'ALLPARKS_LOADED', parks: data })
        })
    }
}

export default fetchAllParks