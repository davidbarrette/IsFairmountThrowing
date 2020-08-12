import config from '../config.json'

// Manipulates the state object in redux
// https://www.youtube.com/watch?time_continue=3&v=SGOFxK-28ns&feature=emb_logo

//This runs when the store dispatches, the action runs, returning the action
//object that is passed into the reducer case
//THIS HAS BEEN MADE OBSOLETE DUE TO ALL THE DATA BEING IN THE DATABASE --> This would be needed for data changing a single user's app state
const basicReducer = (state = config.initialState, action) => {
    switch (action.type) {                
        case 'CHANGE_THROWING_STATUS':
            return Object.assign({}, state, {
                throwing: action.payload
            })

        case 'CHANGE_PARTY_DATE':
            return Object.assign({}, state, {
                partyDate: action.payload
            })

        case 'CHANGE_NOT_THROWING_TEXT':
            return Object.assign({}, state, {
                notThrowingText: action.payload
            })

        case 'CHANGE_RED_ROOM_PASSWORD_CHECKED':
            return Object.assign({}, state, {
                redRoomPasswordChecked: action.payload
            })

        case 'APP_TO_INITIAL_STATE':
            return Object.assign({}, state, config.initialState)
        
        default:
            return state
    }
}

export default basicReducer