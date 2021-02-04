export const getParks = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PARKS"})
        fetch('/parks')
        .then(res => res.json())
        .then(parks => dispatch({type: "FETCH_PARKS", paylaod: parks}))
    }
}