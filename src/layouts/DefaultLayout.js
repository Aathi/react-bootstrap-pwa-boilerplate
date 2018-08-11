import React, { Component, Fragment } from 'react';
import { Cache } from 'aws-amplify';
import { Auth } from "aws-amplify";
import { Link, withRouter } from 'react-router-dom';
import Routes from '../Routes';
import NavBar from '../components/NavBar';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			isAuthenticating: true
		};
	}
    
	async componentDidMount() {
        // const currentSession = Cache.getItem('currentSession')
        // console.log(currentSession)
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);
			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}

		this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	};

	handleLogout = async event => {
        // Cache.setItem('currentSession', null);
        await Auth.signOut();
		this.userHasAuthenticated(false);
		this.props.history.push('/login');
    };
    
	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            handleLogout: this.handleLogout,
        };
        
		return (
            <div>
                {this.state.isAuthenticated && <NavBar {...childProps}/>}
                <Routes childProps={childProps} />
            </div>
		);
	}
}

export default withRouter(App);