export const getTrails = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TRAILS"})
        fetch('http://localhost:3001/trails')
        .then(res => res.json())
        .then(trails => dispatch({type: "FETCH_TRAILS", payload: trails}))
    }
}

export const addTrail = trail => {
    return (dispatch) => {
        dispatch({type: "ADD_TRAIL"})
        fetch(`http://localhost:3001/trails`, { 
            method: 'POST',
            body: JSON.stringify(trail),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(trail => dispatch({type: "TRAIL_ADDED", payload: trail}))
    }
}

//arks/${parkId}/parks`