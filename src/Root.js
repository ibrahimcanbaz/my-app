import React, { Component } from 'react';
import App  from './App';
import Hello  from './Hello';
import Header  from './Header';
import {Switch,Route,withRouter}  from 'react-router-dom';
import {connect}  from 'react-redux';
import * as actions  from './reducers/mainReducer';
import {fetchData}  from './reducers/mainReducer';
import { bindActionCreators } from 'redux';

class Root extends Component {

  render() {
    return (
      <div>
        <Header loginStatus={this.props.loginStatus}/>

      <Switch >
          <Route exact path={"/"} component={App}/>
          <Route  path={"/hello"} component={Hello}/>

      </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({loginStatus: state.mainReducer.loginStatus});
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData}, dispatch);
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Root));
