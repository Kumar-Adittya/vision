import { combineReducers } from 'redux';
import movieListReducer from './movieListReducer'
import movieDetailReducer from './movieDetailReducer'
import movieCastReducer from './movieCastReducer'

export default combineReducers({
    movieNameList: movieListReducer,
    moviedetail: movieDetailReducer,
    movieCastDetail: movieCastReducer,
})