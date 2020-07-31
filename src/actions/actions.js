export const changeThrowingStatus = ( bool ) => {
    return {
        type: 'CHANGE_THROWING_STATUS',
        payload: bool
    }
}

export const changePartyDate = ( str ) => {
    return {
        type: 'CHANGE_PARTY_DATE',
        payload: str
    }
}

export const changeNotThrowingText = ( str ) => {
    return {
        type: 'CHANGE_NOT_THROWING_TEXT',
        payload: str
    }
}

export const changeRedRoomPasswordChecked = ( bool ) => {
    return {
        type: 'CHANGE_RED_ROOM_PASSWORD_CHECKED',
        payload: bool
    }
}

export const appToInitialState = () => {
    return {
        type: 'APP_TO_INITIAL_STATE'
    }
}