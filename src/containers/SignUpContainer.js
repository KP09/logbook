import React from 'react';
import axios from 'axios';
import { SignUpForm } from '../components/SignUpForm';

export class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  onFormChange(object) {
    this.setState(object);
  }

  onFormSubmit() {
    axios.post(
      'http://localhost:3001/api/v1/users',
      {"user": {
        "first_name": this.state.firstName,
        "last_name": this.state.lastName,
        "email": this.state.email,
        "password": this.state.password,
        "password_confirmation": this.state.passwordConfirmation}
      }
    )
    .then(response => {
      console.log(response)
      // Store auth token
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <SignUpForm
        formValues={this.state}
        onFormChange={this.onFormChange.bind(this)}
        onFormSubmit={this.onFormSubmit.bind(this)}
      />
    );
  }
}
