import config from '../config.json'

// Manipulates the state object in redux
// https://www.youtube.com/watch?time_continue=3&v=SGOFxK-28ns&feature=emb_logo

//This runs when the store dispatches, Object.assign(empty, state, obj) comines state and obj into empty
const basicReducer = (state = config.initialState, action) => {
    switch (action.type) {  
        case config.actionType.UPDATE_APP_STATE_FULL: //This is the only action to run
            return Object.assign({}, state, {
                throwing: action.payload.throwingStatus,
                partyDate: action.payload.partyDate,
                notThrowingText: action.payload.notThrowingText
            })

        case config.actionType.CHANGE_THROWING_STATUS:
            return Object.assign({}, state, {
                throwing: action.payload
            })

        case config.actionType.CHANGE_PARTY_DATE:
            return Object.assign({}, state, {
                partyDate: action.payload
            })

        case config.actionType.CHANGE_NOT_THROWING_TEXT:
            return Object.assign({}, state, {
                notThrowingText: action.payload
            })

        case config.actionType.CHANGE_RED_ROOM_PASSWORD_CHECKED:
            return Object.assign({}, state, {
                redRoomPasswordChecked: action.payload
            })

        case config.actionType.APP_TO_INITIAL_STATE:
            return Object.assign({}, state, config.initialState)
        
        default:
            return state
    }
}

export default basicReducer