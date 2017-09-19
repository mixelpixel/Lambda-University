import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      password: '',
    }
    this.handleSetUserName = this.handleSetUserName.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.loginWithUser = this.loginWithUser.bind(this);
  }
  handleSetUserName(e) {
    this.setState({userName: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  loginWithUser(e) {
    e.preventDefault();
    const user = {username: this.state.userName, password: this.state.password};
    axios.post('http://localhost:3030/login', user)
      .then((data) => {
        localStorage.setItem('uuID', data.data._id);
        setTimeout(() => {
          window.location = '/posts';
        }); 
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <form className="Login-form">
        <FormGroup className="Login-group" controlId="formHorizontalEmail">
            User Name
            <FormControl 
              id="formHorizontalEmail"
              className="form-control"
              onChange={this.handleSetUserName} 
              placeholder="User Name"
              type="text" 
              value={this.state.userName} 
            />
          </FormGroup>
          <FormGroup className="Login-group" controlId="formHorizontalPassword">
            Password
            <FormControl 
              id="formHorizontalPassword"
              className="form-control"
              onChange={this.handleSetPassword} 
              placeholder="password"
              type="password" 
              value={this.state.password} 
            />
          <Link to="/create-user">Don't have an account? Sign up here.</Link>
          <br />
          <button className="btn btn-default" onClick={this.loginWithUser}>Login</button>
        </FormGroup>
      </form>
    )
  }
}