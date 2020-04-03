import { FETCH_MOVIECAST } from "../action/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIECAST:
            return action.payload
        default:
            return state;
    }
}