//For App
export const selectAppData = (state) => {
    return ({
        redRoomPasswordChecked: state.redRoomPasswordChecked
    })
}

//For Throwing
export const selectThrowingData = (state) => {
    return ({
        throwing: state.throwing,
        partyDate: state.partyDate,
        notThrowingText: state.notThrowingText
    })
}

//For Redroom
export const selectRedDoorData = (state) => {
    return ({
        redRoomPassword: state.redRoomPassword
    })
}

export const selectRedRoomData = (state) => {
    return ({
        redRoomPasswordChecked: state.redRoomPasswordChecked,
        notThrowingText: state.notThrowingText
    })
}