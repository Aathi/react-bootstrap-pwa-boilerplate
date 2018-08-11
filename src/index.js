import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./config";
import DefaultLayout from "./layouts/DefaultLayout";
import "./styles/index.css";

// import registerServiceWorker from './registerServiceWorker';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    API: {
        endpoints: [
            {
                name: "schoolApp",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            }
        ]
    }
});

ReactDOM.render(
    <Router>
        <DefaultLayout />
    </Router>,
    document.getElementById("root")
);
// registerServiceWorker();
