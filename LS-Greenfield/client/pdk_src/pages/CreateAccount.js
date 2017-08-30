import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

export default class CreateAccount extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleSetusername = this.handleSetusername.bind(this);
    this.handleSetPassword = this.handleSetPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  handleSetusername(e) {
    this.setState({username: e.target.value});
  }
  handleSetPassword(e) {
    this.setState({password: e.target.value});
  }
  createUser(e) {
    e.preventDefault();
    const userToSave = {username: this.state.username, password: this.state.password};
    axios.post('http://localhost:3030/new-user', userToSave)
      .then((data) => {
        localStorage.setItem('uuID', data.data._id);
        setTimeout(() => {
          window.location = '/posts';
        }, 200);
      })
      .catch((err) => {
        console.log({'error': err.response.error});
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
              onChange={this.handleSetusername} 
              placeholder="User Name"
              type="text" 
              value={this.state.username} 
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
          <Link to="/">Already a member? Login here.</Link>
          <br/>
          <button className="btn btn-default" onClick={this.createUser}>Create Account</button>
        </FormGroup>
      </form>
    )
  }
}
