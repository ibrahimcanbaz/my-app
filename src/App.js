import React, { Component } from 'react';
import logo from './logo.svg';
import LoginForm from './LoginForm';
import './App.css';
import {connect}  from 'react-redux';
import * as actions  from './reducers/mainReducer';
import {loginAction}  from './reducers/mainReducer';
import { bindActionCreators } from 'redux';

class App extends Component {

  loginAction=(data)=>{
    this.props.loginAction(data,this.props.history)

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Login Form</h2>
        </div>
      
        <div className="container" >
          <div className="row" >
            <div className="col-lg-3 col-md-3 col-xs-12" >
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <LoginForm loginAction={this.loginAction}/>
              </div>
              <div className="col-lg-3 col-md-3 col-xs-12">
                </div>
            </div>


          </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction}, dispatch);

export default connect(null,mapDispatchToProps)(App);
