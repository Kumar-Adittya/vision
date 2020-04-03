import { FETCH_MOVIEDETAIL } from "../action/types";
import { MOVIE_API_URL, MOVIE_API } from '../api/movieapi'
export const fetchMovieDetail = (movie_id) => dispatch => {
    fetch(`${MOVIE_API_URL}movie/${movie_id}?api_key=${MOVIE_API}&language=en-US`)
        .then(res => res.json())
        .then(movieDetailData => {
            dispatch({
                type: FETCH_MOVIEDETAIL,
                payload: movieDetailData
            })
        });
}