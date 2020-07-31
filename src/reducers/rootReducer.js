//import dependencies
import { combineReducers } from 'redux'

//Import reducers
import basicReducer from './basicReducer'

//Root Reducer
const rootReducer = combineReducers({
    basicReducer: basicReducer,
})




//Exports
export default rootReducer