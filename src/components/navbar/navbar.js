import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    const { appContext, users } = props;
    const {loggedInUserId} = appContext;

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">Would You Rather</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add">New Question</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/leader">Leader Board</NavLink>
                </li>
                </ul>
                
                {loggedInUserId? (
                <ul className="navbar-nav float-right">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">{users[loggedInUserId].name}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#" onClick={()=>{props.signout()}} className="nav-link">Sign out</NavLink>
                    </li>
                </ul>) : ''}
                
            </div>
        </nav>
    );
}

export default NavBar;