import { BALL_STATE, DIV_BALL_STATE } from "./action";

const initState = {
    balls: [
        { position: 1 }, { position: 2 }, { position: 3 }, { position: 4 }, { position: 5 }
    ],
    divBalls: []
}

export const ballReducer = (state = initState, action) => {
    switch (action.type) {
        case BALL_STATE:
            return {
                ...state,
                balls: action.payload
            }
        case DIV_BALL_STATE:
            return {
                ...state,
                divBalls: action.payload
            }
        default:
            return state;
    }
}