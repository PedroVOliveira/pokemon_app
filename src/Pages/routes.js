import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';

function Routes() {
    return (
        <BrowserRouter>
            <Route 
                component={Dashboard}
                path="/"
                exact
            />
            <Route
                component={Profile}
                path="/profile"
            />
        </BrowserRouter>
    )
}

export default Routes;