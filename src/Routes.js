import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Classes from './pages/Classes'


export default ({ childProps }) => (
    <Switch>
        {/* Landing page any auth validation */}
        {/* <AppliedRoute path="/" exact component={Home} props={childProps}/> */}
        <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
        <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
        <AuthenticatedRoute path="/class/:action" exact component={Classes} props={childProps} />
        <Route path="*" component={PageNotFound}  props={childProps}/>
    </Switch>
);
