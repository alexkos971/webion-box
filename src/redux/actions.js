import { CHANGE_DIR } from "./types";

export const changeDir = (dir) => {
    return {
        type: CHANGE_DIR,
        payload: dir
    }
} 