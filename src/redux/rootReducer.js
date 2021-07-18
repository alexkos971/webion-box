import { combineReducers } from "redux";
import { dirReducer } from "./dirReducer";
import { profileReducer } from "./profileReducer"

export const rootReducer = combineReducers({
    directions: dirReducer,
    profile: profileReducer
})
