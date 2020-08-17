import config from '../config.json'
export const updateAppStateFull = ( obj ) => {
    return {
        type: config.actionType.UPDATE_APP_STATE_FULL,
        payload: obj
    }
}

export const changeThrowingStatus = ( bool ) => {
    return {
        type: config.actionType.CHANGE_THROWING_STATUS,
        payload: bool
    }
}

export const changePartyDate = ( str ) => {
    return {
        type: config.actionType.CHANGE_PARTY_DATE,
        payload: str
    }
}

export const changeNotThrowingText = ( str ) => {
    return {
        type: config.actionType.CHANGE_NOT_THROWING_TEXT,
        payload: str
    }
}

export const changeRedRoomPasswordChecked = ( bool ) => {
    return {
        type: config.actionType.CHANGE_RED_ROOM_PASSWORD_CHECKED,
        payload: bool
    }
}

export const appToInitialState = () => {
    return {
        type: config.actionType.APP_TO_INITIAL_STATE
    }
}