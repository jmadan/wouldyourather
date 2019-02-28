import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute =({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest}
        render={props => (isAuthenticated ? 
            <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {originalPath: props.location.pathname}
            }}/>
        )}
    />
);    

export default PrivateRoute;