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

        case "ADD_TRAILS":
            return {
                ...state,
                trails: action.payload,
                loading: true
            }

        case "TRAIL_ADDED":
            return {
                ...state,
                trails: [...state.trails, action.payload],
                loading: false
            }

    default:
        return state;
}
} 

export default trailReducer;