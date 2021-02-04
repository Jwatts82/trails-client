export const getParks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PARKS"})
        fetch('http://localhost:3001/parks')
        .then(res => res.json())
        .then(parks => dispatch({type: "FETCH_PARKS", payload: parks}))
    }
}

export const addPark = park => {
    return (dispatch) => {
        dispatch({type: "ADD_PARK"})
        fetch('http://localhost:3001/parks', {   
            method: 'POST',
            body: JSON.stringify(park),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(park => dispatch({type: "PARK_ADDED"}))
    }
}