import React from 'react';
import axios from 'axios';
import { LoginForm } from '../components/LoginForm';

export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onFormChange(object) {
    this.setState(object);
  }

  onFormSubmit() {
    axios.post(
      'http://localhost:3001/api/v1/users/login',
      {
        "email": this.state.email,
        "password": this.state.password,
      }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <LoginForm
        formValues={this.state}
        onFormChange={this.onFormChange.bind(this)}
        onFormSubmit={this.onFormSubmit.bind(this)}
      />
    );
  }
}
