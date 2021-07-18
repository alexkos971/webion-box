import { CHANGE_DIR } from "./types";

const initialState = {
    directions: [
        {
            name: 'home',
            icon: "home"
        }, 
        {
            name: 'rating',
            icon: "star" 
        },
        {
            name: 'charts',
            icon: "chart-pie"
        }],
    dir: {
        name: 'home',
        icon: "home"
    }
 }

export const dirReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_DIR:
            return { ...state,  dir: action.payload }
    
        default: return state;
    }
}