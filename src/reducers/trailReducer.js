const trailReducer=(state={trails: [], loading: false}, action) => {
    switch(action.type){
        case "LOADING_TRAILS":
            return {
                ...state,
                loading: true
            }

        case "FETCH_TRAILS":
            return {
                ...state,
                trails: action.payload,
                loading: false
            }

    default:
        return state;
}
} 

export default trailReducer;