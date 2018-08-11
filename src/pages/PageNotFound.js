import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {
  render() {
    return (
        <div className="container" style={{textAlign: 'center'}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link
                                to="/"
                                className="btn btn-primary btn-lg"
                            >
                                <span className="glyphicon glyphicon-home" />
                                Take Me Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
