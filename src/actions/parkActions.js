export const getParks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PARKS"})
        fetch('/parks')
        .then(res => res.json())
        .then(parks => dispatch({type: "FETCH_PARKS", paylaod: parks}))
    }
}

export const addPark = park => {
    return (dispatch) => {
        dispatch({type: "ADD_PARK"})
        fetch('/parks', {   
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