import React, { Suspense } from 'react';
import {
    Switch, Route, withRouter
} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Leader from './components/leaderboard/leaderboard';
import ViewQuestion from './components/question/viewQuestion';

import AddQuestion from './components/question/addQuestion';
import PrivateRoute from './components/private';
const Routes = (props) => {
    const { appContext } = props;
    const isAuthenticated = appContext.loggedInUserId ? true : false;
    return (
        <div style={{ minHeight: '35em' }}>
        <Suspense>
            <Switch>
                <PrivateRoute exact path='/' component={Home} isAuthenticated={isAuthenticated} />
                <Route exact path='/login' component={withRouter(Login)}/>
                <PrivateRoute exact path="/add" component={withRouter(AddQuestion)} isAuthenticated={isAuthenticated} />
                <PrivateRoute exact path="/questions/:id" component={withRouter(ViewQuestion)} isAuthenticated={isAuthenticated} />
                <PrivateRoute exact path="/leader" component={withRouter(Leader)} isAuthenticated={isAuthenticated} {...props} />
            </Switch>
        </Suspense>
        </div>
    );
};

export default Routes;