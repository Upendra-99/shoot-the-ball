import { ballReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(ballReducer)