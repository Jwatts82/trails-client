import { combineReducers } from 'redux'
import parkReducer from './parkReducer'
import trailReducer from './trailReducer'


const rootReducer = combineReducers({
    parkReducer,
    trailReducer
})

export default rootReducer;
