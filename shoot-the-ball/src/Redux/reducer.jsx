import { SOURCE_BALL_STATE, DESTINATION_BALL_STATE } from "./action";
import { nanoid } from "nanoid"

// stores unique color compbination;
var uniqueColor = [];

//initial state for ballReducer function;
const initState = {
    //source has all 5 balls initially;
    source: [
        { id: nanoid(), position: 1, color: randomColor(), display: "block" }, { id: nanoid(), position: 2, color: randomColor(), display: "block" }, { id: nanoid(), position: 3, color: randomColor(), display: "block" }, { id: nanoid(), position: 4, color: randomColor(), display: "block" }, { id: nanoid(), position: 5, color: randomColor(), display: "block" }
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


// ramndom rgb color generator function;
function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // combine red, green and blue colors ranges to identify uniquely;
    let combineColors = red + '' + green + '' + blue;

    if (uniqueColor.includes(combineColors)) {
        // if duplicate color is generated then re-generate the color;
        return randomColor();
    }
    else {
        uniqueColor.push(combineColors)
        return `rgb(${red} ${green} ${blue})`;
    }
}


// console.log(uniqueColor)
