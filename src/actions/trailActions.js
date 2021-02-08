export const getTrails = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_TRAILS"})
        fetch('http://localhost:3001/trails')
        .then(res => res.json())
        .then(trails => dispatch({type: "FETCH_TRAILS", payload: trails}))
    }
}

