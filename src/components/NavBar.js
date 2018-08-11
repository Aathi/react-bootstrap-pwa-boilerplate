import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import $ from "jquery";
import "../styles/offCanvas.css";

export default class NavBar extends Component {
    componentDidMount() {
        $(function () {
            "use strict";
            $('[data-toggle="offcanvas"]').on("click", function () {
                $(".offcanvas-collapse").toggleClass("open");
            });
        });
    }

    signOut = () => {
        this.props.handleLogout(false)
    }
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <a className="navbar-brand mr-auto mr-lg-0" href="#">
                        School
                    </a>
                    <button
                        className="navbar-toggler p-0 border-0"
                        type="button"
                        data-toggle="offcanvas"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="navbar-collapse offcanvas-collapse"
                        id="navbarsExampleDefault"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Notifications
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.signOut}>
                                    Signout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav-scroller bg-white shadow-sm">
                    <nav className="nav nav-underline">
                        <Link to="/" className="nav-link active" >
                            Dashboard
                        </Link>
                        <Link to="/class/attendance" className="nav-link" >
                            Attendance
                        </Link>
                    </nav>
                </div>
            </div>
        )
  }
}
