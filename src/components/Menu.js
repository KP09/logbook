import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Close</button>
        <button>Account Settings</button>
        <button>Passages</button>
        <button>Overview</button>
        <button>Target</button>
      </div>
    );
  }
}
