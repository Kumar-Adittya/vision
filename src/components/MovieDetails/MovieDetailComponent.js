import React, { Component } from 'react';
import { IMG_URL } from '../../api/movieapi';
import '../MovieDetails/moviedetail.scss'
import { connect } from 'react-redux'
import { fetchMovieDetail } from '../../action/movieDetailAction'
import { fetchMovieCast } from '../../action/movieCastAction'
class MovieDetailComponent extends Component {
    constructor(props) {
        super(props);
    }
 
    componentDidMount() {
        const movie_id = this.props.match.params.id;
        this.props.fetchMovieDetail(movie_id);
        this.props.fetchMovieCast(movie_id);
    }

    render() {
        const { movieDetails, movieCast } = this.props;
        const backdrop_bg = {
            backgroundImage: `linear-gradient(rgb(25, 3, 39),rgba(245, 246, 252, 0.52)),
             url("${IMG_URL}/original${movieDetails.backdrop_path}")`,
        }
        return (
            <React.Fragment>
                <div className="detail_wrapper" style={backdrop_bg}>
                    <div className="poster_img">
                        <img src={`${IMG_URL}/w300${movieDetails.poster_path}`} />
                    </div>
                    <div className="movie_detail">
                        <h1>{movieDetails.title}</h1>
                        <em>{movieDetails.release_date} &nbsp;&nbsp;&nbsp;</em>
                        {
                            movieDetails.genres ? movieDetails.genres.map(gen => (
                                <span key={gen.id}>{gen.name} </span>
                            )) : null
                        }
                        <br /> <br /> <br />
                        <h3>Overview</h3>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>
                <div className="Cast_wrapper">
                    <h3>Top Billed Cast</h3>
                    <div className="cast_inner">
                        {
                            movieCast.cast ? movieCast.cast.map(cast => (
                                <div key={cast.id}>
                                    <img src={`${IMG_URL}/w138_and_h175_face${cast.profile_path}`} />
                                    <h3>{cast.name}</h3>
                                </div>
                            )) : null
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        movieDetails: state.moviedetail,
        movieCast: state.movieCastDetail
    }
}

export default connect(mapStateToProps, { fetchMovieDetail, fetchMovieCast })(MovieDetailComponent);