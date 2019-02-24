import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NavBar from './components/navbar/navbar';
import * as AppActions from './actions/appActions';

class App extends Component {

  componentDidMount(){
    const { actions } = this.props;
    actions.loadInitialData()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Home {...this.props}/>
        </header>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return ({
    appContext: store.AppContext
  });
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, AppActions), dispatch,),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
