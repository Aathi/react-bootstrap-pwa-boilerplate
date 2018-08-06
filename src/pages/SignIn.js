import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/signIn.css";
import { Scholarship } from "../helpers/Icons";
import Button from "../components/common/Button";

class Signin extends Component {
  render() {
    return (
      <div>
        <form className="form-signin">
          <img className="mb-4" src={Scholarship} alt width={72} height={72} />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <Button
            className="btn btn-lg btn-primary btn-block"
            label="Sign in"
            url="/"
          />
          <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
