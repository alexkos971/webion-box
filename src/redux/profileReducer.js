// import { CHANGE_DIR } from "./types";

const initialState = {
    name: 'PiDoR228',
    avatar: 'https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg'
 }

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        // case CHANGE_DIR:
            // return { ...state,  profile: action.payload }
    
        default: return state;
    }
}