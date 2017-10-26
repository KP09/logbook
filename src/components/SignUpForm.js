import React from 'react';

export class SignUpForm extends React.Component {
  handleChange(event) {
    const newState = {[event.target.name]: event.target.value};
    this.props.onFormChange(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>
            First name: <input
            type="text"
            id="first_name"
            name="firstName"
            value={this.props.formValues.firstName}
            onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Last name: <input
            type="text"
            id="last_name"
            name="lastName"
            value={this.props.formValues.lastName}
            onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            email: <input
            type="text"
            id="email"
            name="email"
            value={this.props.formValues.email}
            onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password: <input
            type="password"
            id="password"
            name="password"
            value={this.props.formValues.password}
            onChange={(event) => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Confirm password: <input
            type="password"
            id="password_confirmation"
            name="passwordConfirmation"
            value={this.props.formValues.passwordConfirmation}
            onChange={(event) => this.handleChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    );
  }
};
