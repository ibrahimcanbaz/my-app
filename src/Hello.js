import React, { Component } from 'react';
import {connect}  from 'react-redux';
import * as actions  from './reducers/mainReducer';
import {fetchData}  from './reducers/mainReducer';
import { bindActionCreators } from 'redux';

class Hello extends Component {
  constructor(props){
    super(props)
    console.log('ENNN')
  }
  componentDidMount(){
    console.log('AHAAA')
    this.props.fetchData(this.props.history)
  }
  render() {
    return (
      <div >
          <div className="container" >
            <div className="row" >
              <div className="col-lg-3 col-md-3 col-xs-12" >
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                      <p className="h3">This is the List </p>
                      <ul className="list-group">
                        {this.props.list.map((item,index)=>{
                          return <li key = {index} className={item.talent?"list-group-item active":"list-group-item"}>{item.name} - {item.character}</li>
                        })}
                      </ul>
                    <p className="p" style={{fontStyle:'italic'}}>List size {this.props.list.length} </p>
                </div>
                <div className="col-lg-3 col-md-3 col-xs-12">
                  </div>
              </div>
            </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({list: state.mainReducer.list});
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Hello);
