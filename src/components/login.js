import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignIn } from '../actions/appActions';
import logo from '../logo.svg';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: 'selectuser'
        }
        this.onSelect = this.onSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSelect(e){
        e.preventDefault();
        const { actions } = this.props;
        if(this.state.user !== 'selectuser')
        {
            actions.userSignIn(this.state.user);
        }
    }

    handleChange(e){
        const { users } = this.props;
        this.setState({
            user: users[e.target.value]
        })
    }

    render(){
        const { appContext, users } = this.props;
        const {originalPath} = this.props.location.state || '/';
        if(appContext.loggedInUserId){
            return <Redirect to={originalPath} />;
        }
        const ele = users && Object.keys(users).map(u => <option key={users[u].id} value={users[u].id}>{users[u].name}</option>);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-md-3">
                        <div className="card text-center">
                            <div className="card-header">
                                Welcome to the Would You Rather App!
                            </div>
                            <div className="card-body">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p className="card-text">Sign in</p>
                            <form onSubmit={this.onSelect}>
                                <div className="form-group">
                                    <label htmlFor="userselect">Select user</label>
                                    <select value={this.state.user.id} name="userselectt" className="form-control" id="userselectt" onChange={this.handleChange}>
                                    <option value="selectuser">Select user</option>
                                    {ele}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    return {
        appContext: store.AppContext,
        users: store.Users
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(Object.assign({}, { userSignIn }), dispatch),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Login);