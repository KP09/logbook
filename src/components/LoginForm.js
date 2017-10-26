import React from 'react';

export class LoginForm extends React.Component {
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
            Email: <input
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
          <button type="submit">Create Account</button>
        </div>
      </form>
    );
  }
};
