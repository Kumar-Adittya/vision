import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SideNavigationRoutes from '../SideNavigationRoutes/SideNavigationRoutes';
import TopHeaderRoutes from '../TopHeaderRoutes/TopHeaderRoutes';
import MoviesComponent from '../MovieComponent/MoviesComponet'
import MovieDetailComponent from '../MovieDetails/MovieDetailComponent'
import '../home.scss'
class BodyComponent extends Component {
    render() {
        return (
            <div className="dashbord-bg">
                <Router>
                    <div className="dashboard-wrap">
                        <div className="side-nav">
                            <SideNavigationRoutes />
                        </div>
                        <div className="dashboard-body">
                            <header className="Header_menu">
                                <nav><TopHeaderRoutes /></nav>
                            </header>
                            <div className="body-wrap">
                                <Switch>
                                    <Route path="/" exact component={MoviesComponent} />
                                    <Route path="/movie-detail:id" exact component={MovieDetailComponent} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default BodyComponent;