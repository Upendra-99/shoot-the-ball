export const SOURCE_BALL_STATE = "SOURCE_BALL_STATE";
export const DESTINATION_BALL_STATE = "DESTINATION_BALL_STATE";

export const sourceBallAction = (payload) => {
    return {
        type: SOURCE_BALL_STATE,
        payload
    }
}

export const destinationBallsState = (payload) => {
    return {
        type: DESTINATION_BALL_STATE,
        payload
    }
}
