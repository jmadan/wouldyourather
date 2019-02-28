import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from 'react-router-dom';
import './App.css';
import * as AppActions from './actions/appActions';
import * as userActions from './actions/userActions';
import history from './history';
import NavBar from './components/navbar/navbar';
import Routes from './router';
class App extends Component {
  constructor(){
    super();
    this.signout = this.signout.bind(this);
  }

  componentDidMount(){
    const { actions } = this.props;
      actions.loadInitialData();
  }

  signout(){
    const { actions } = this.props;
    actions.userSignOut();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <>
            <NavBar {...this.props} signout={this.signout} />
            <hr />
            <div style={{ minHeight: '35em' }}>
              <Routes {...this.props}/>
            </div>  
          </>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return ({
    appContext: store.AppContext,
    users: store.Users,
  });
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, AppActions, userActions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
