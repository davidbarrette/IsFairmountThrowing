const initialState = {
    throwing: false,
    partyDate: "MM/DD",
    notThrowingText: "Due to Covid-19, open gatherings are indefinitely postponed",
    redRoomPassword: "Turck417",
    redRoomPasswordChecked: false
}


// Manipulates the state object in redux
// https://www.youtube.com/watch?time_continue=3&v=SGOFxK-28ns&feature=emb_logo

//This runs when the store dispatches, the action runs, returning the action
//object that is passed into the reducer case
const basicReducer = (state = initialState, action) => {
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
            return Object.assign({}, state, initialState)
        
        default:
            return state
    }
}

export default basicReducer