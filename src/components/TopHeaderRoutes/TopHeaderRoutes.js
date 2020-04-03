import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './topnav.scss'
import { connect } from 'react-redux';
import { fetchSearchList } from '../../action/movieListAction'
class TopHeaderRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieSearchValue: ''
    }
  }

  handleMovieSearch(event) {
    this.setState({ movieSearchValue: event.target.value });
    this.props.fetchSearchList(this.state.movieSearchValue);
  }

  render() {
    const { movieSearchValue } = this.state;
    return (
      <div className="header-nav">
        <form>
          <div className="form-control">
            <input type="search" name="movie" value={movieSearchValue} onChange={(e) => this.handleMovieSearch(e)} placeholder="Search most u like" />
          </div>
        </form>
        <nav>
          <ul>
            <li> <Link to="/">Film</Link> </li>
            <li> <Link to="/movie-detail">Social</Link> </li>
            <li> <Link to="/">Videos</Link> </li>
            <li> <Link to="/">News</Link> </li>
            <li> <Link to="/">About</Link> </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
}

export default connect(mapStateToProps, { fetchSearchList })(TopHeaderRoutes);