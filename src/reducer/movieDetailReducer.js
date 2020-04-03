import { FETCH_MOVIEDETAIL } from "../action/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIEDETAIL:
            return action.payload;
        default:
            return state;
    }
}