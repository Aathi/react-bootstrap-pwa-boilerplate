import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Cache } from 'aws-amplify';
import { Scholarship } from "../helpers/Icons";
import LoaderButton from "../components/common/LoaderButton";
import "../styles/signIn.css";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            phoneNumber: "+33783596388",
            // password: "0783596388"
            password: "198658Athithan()"

        };
    }

    validateForm() {
        return this.state.phoneNumber.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
            const authResult = await Auth.signIn(this.state.phoneNumber, this.state.password);
            // Cache.setItem('currentSession', { session:  authResult.Session, username: authResult.username});
            this.props.userHasAuthenticated(true);
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }
    render() {
        return (
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <img className="mb-4" src={Scholarship} alt="School PWA App" width={72} height={72} />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="form-control"
                        placeholder="Phone Number"
                        required
                        autoFocus
                        value={this.state.phoneNumber}
                        onChange={this.handleChange}
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
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <LoaderButton
                        className="btn btn-lg btn-primary btn-block"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                    />
                    {/* <Button
                        className="btn btn-lg btn-primary btn-block"
                        label="Sign in"
                        url="/"
                    /> */}
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        );
    }
}

export default withRouter(Signin);
