import { SOURCE_BALL_STATE, DESTINATION_BALL_STATE } from "./action";
import { nanoid } from "nanoid"

//initial state for ballReducer function;
const initState = {
    //source has all 5 balls initially;
    source: [
        { id: nanoid(), position: 1, color: "grey", display: "block" }, { id: nanoid(), position: 2, color: "yellow", display: "block" }, { id: nanoid(), position: 3, color: "orange", display: "block" }, { id: nanoid(), position: 4, color: "red", display: "block" }, { id: nanoid(), position: 5, color: "pink", display: "block" }
    ],
    //destination will contain all balls which will be shooted;
    destination: []
}

//reducer function;
export const ballReducer = (state = initState, action) => {
    switch (action.type) {
        case SOURCE_BALL_STATE:
            return {
                ...state,
                source: action.payload
            }
        case DESTINATION_BALL_STATE:
            return {
                ...state,
                destination: action.payload
            }
        default:
            return state;
    }
}