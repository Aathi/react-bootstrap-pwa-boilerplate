import React from 'react'
import { Route, Redirect } from "react-router-dom";

export default ({ component: MatchedPage, props: authProps, ...rest }) => {
    // console.log('--------AuthenticatedRoute-------------');
    // console.log('authProps ->', authProps);
    // console.log('------------------------------------');
    return (
        <Route {...rest} render={matchProps => (
            authProps.isAuthenticated ?
                <MatchedPage {...matchProps} {...authProps} />
                :
                <Redirect
                    to={`/login?redirect=${matchProps.location.pathname}${matchProps.location.search}`}
                />
        )} />
    )
};