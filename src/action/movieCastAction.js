import { FETCH_MOVIECAST } from "../action/types";
import { MOVIE_API_URL, MOVIE_API } from '../api/movieapi'

export const fetchMovieCast = (movie_id) => dispatch => {
    fetch(`${MOVIE_API_URL}movie/${movie_id}/credits?api_key=${MOVIE_API}&language=en-US`)
        .then(res => res.json())
        .then(castDetail => {
            dispatch({
                type: FETCH_MOVIECAST,
                payload: castDetail
            })
        })
}