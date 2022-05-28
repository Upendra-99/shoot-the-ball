export const BALL_STATE = "BALL_STATE";
export const DIV_BALL_STATE = "DIV_BALL_STATE";

export const ballState = (payload) => {
    return {
        type: BALL_STATE,
        payload
    }

}

export const divBallsState = (payload) => {
    return {
        type: DIV_BALL_STATE,
        payload
    }
}
