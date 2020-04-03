import React, { Component } from 'react'; 
import {Link} from "react-router-dom"; 
import { FiMonitor } from 'react-icons/fi';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TiFilm } from 'react-icons/ti';
import { MdMovieCreation } from 'react-icons/md';
import { GiFilmProjector, GiFilmSpool, GiFilmStrip} from 'react-icons/gi';
import './sidenav.scss'
class SideNavigationRoutes extends Component {
    render() {
        return (  
            <div className="sidebar-navigation">
              <nav>
                <div className="logo"><FiMonitor/>&nbsp;vi<span>sion</span></div>
                <h3>Movies</h3>
                <ul>
                  <li>
                    <Link to="/"><GiFilmProjector/>All Films</Link>
                  </li>
                  <li>
                    <Link to="/movie-detail"><GiFilmSpool/>Features</Link>
                  </li>
                  <li>
                    <Link to="/"><GiFilmStrip/>Documents</Link>
                  </li>
                  <li>
                    <Link to="/"><MdMovieCreation/>Shots</Link>
                  </li>
                  <li>
                    <Link to="/"><FiMonitor/>Tv Shows</Link>
                  </li>
                  <li>
                    <Link to="/"><TiFilm/>Commertials</Link>
                  </li>
                </ul>
              </nav> 
              <div className="social-icons">
                <a href="#"><FaFacebook/></a>
                <a href="#"><AiFillTwitterCircle/></a>
                <a href="#"><AiFillInstagram/></a>
              </div>
              </div>
        );
    }
}

export default SideNavigationRoutes;