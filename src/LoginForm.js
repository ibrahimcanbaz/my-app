import React, { Component } from 'react';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      pass:''
    };

  }

  formClick=(e)=>{
    e.preventDefault()
    this.props.loginAction({email:this.state.email,pass:this.state.pass,uid:'ASAbXDER'})
  }

  handleInputChange=(event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (

        <form onSubmit={this.formClick}>
            <div className="form-group">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="email" value={this.state.email} type="email" onChange={this.handleInputChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="pass" value={this.state.pass} type="password" onChange={this.handleInputChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>

          <button  type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
      
    );
  }
}


export default LoginForm;
