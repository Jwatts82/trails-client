const parkReducer=(state={parks: [], loading: false}, action) => {
        switch(action.type){
            case "LOADING_PARKS":
                return {
                    ...state,
                    loading: true
                }
    
            case "FETCH_PARKS":
                return {
                    ...state,
                    parks: action.payload,
                    loading: false
                }

            case "ADD_TRAILS":
                return {
                ...state,
                trails: action.payload,
                loading: true
            }

        case "TRAIL_ADDED":
            const newParks = state.parks.map((pk) => {
                if ( pk.id === action.payload.park_id) {
                    return {...pk, trails: [...pk.trails, action.payload ]}
                } else {
                    return pk
                }
            })

            return {
                ...state,
                parks: newParks,
                loading: false
            }


        default:
            return state;
    }
} 

export default parkReducer;