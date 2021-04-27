

const fetchAllParks = () => { 
    
    return (dispatch) => { 
        dispatch({ type:'LOADING_ALLPARKS'})
        fetch("https://developer.nps.gov/api/v1/parks?limit=510&api_key=hREloscdhIwvolviZMmxmhnpRlnuIEqOb3XvBuRI")
        .then(response => response.json())
        .then(data => {
            return dispatch({ type:'ALLPARKS_LOADED', parks: data.data })
        })
    }
}

export default fetchAllParks