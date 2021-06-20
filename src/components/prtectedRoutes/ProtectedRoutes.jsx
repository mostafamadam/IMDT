import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoutes extends Component {
    render() {
        let token = localStorage.getItem("token");
        if (token) {
            return (
                <Route path={this.props.path} component={this.props.component} />
            );
        } else {
            return (
                <Redirect to="/Login" />
            );
        }

    }
}

export default ProtectedRoutes;
