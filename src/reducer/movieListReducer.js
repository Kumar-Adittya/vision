import { FETCH_MOVIELIST } from '../action/types'


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIELIST:
            return action.payload
        case FETCH_MOVIELIST:
            return action.payload
        default:
            return state;
    }
}