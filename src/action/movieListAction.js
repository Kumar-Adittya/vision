import { FETCH_MOVIELIST } from './types'
import { MOVIE_API_URL, MOVIE_API } from '../api/movieapi'

export const fetchMovieList = (pageNumber) => dispatch => {
    fetch(`${MOVIE_API_URL}discover/movie?api_key=${MOVIE_API}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${pageNumber}`)
        .then(res => res.json())
        .then(popular_movies => {
            dispatch({
                type: FETCH_MOVIELIST,
                payload: popular_movies
            })
        })
}


export const fetchSearchList = (search_keyword) => dispatch => {
    fetch(`${MOVIE_API_URL}search/movie?api_key=${MOVIE_API}&language=en-US&include_adult=false&query="${search_keyword}"&include_video=true`)
        .then(res => res.json())
        .then(search_movies => {
            dispatch({
                type: FETCH_MOVIELIST,
                payload: search_movies
            })
        })
} 