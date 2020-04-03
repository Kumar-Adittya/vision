import React, { Component } from 'react';
import './movies.scss'
import { Link } from "react-router-dom";
import { IMG_URL } from '../../api/movieapi';
import Pagination from '../Pagination/Paginations'
import '../Pagination/pagination.scss'
import { connect } from 'react-redux'
import { fetchMovieList } from '../../action/movieListAction'
class MoviesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            per_page: 5, 
        }
    }

    componentWillMount() {
        this.props.fetchMovieList(1); 
    }

    render() {
        const { movieNameList } = this.props;
        return (
            <React.Fragment>
                <div className="dashboard-movie-list">

                    {
                        movieNameList.results ? movieNameList.results.map(popular_movie_list => (
                            <div className="movie-thumbnail" key={popular_movie_list.id}>
                                <Link to={`/movie-detail${popular_movie_list.id}`}>
                                    <figure>
                                        {popular_movie_list.poster_path ? <img src={`${IMG_URL}/w220_and_h330_face${popular_movie_list.poster_path}`} /> : <div className="placeholder_placeholder"></div>}
                                        <figcaption>
                                            <span className="rating">{Math.round(popular_movie_list.vote_average / 10 * 100) + '%'}</span>
                                            <h3>{popular_movie_list.title}</h3>
                                            <i>{popular_movie_list.release_date}</i>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        )) : null
                    }
                </div>
                <div className="pagination-wrapper">
                    <Pagination
                        total={movieNameList.total_results}
                        per_page={this.state.per_page}
                        handlePaginationRequest={this.props.fetchMovieList}
                    />
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        movieNameList: state.movieNameList
    }
}

export default connect(mapStateToProps, { fetchMovieList })(MoviesComponent);