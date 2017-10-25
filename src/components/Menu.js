import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>Close</button>
        <button>Account Settings</button>
        <button>Passages</button>
        <button>Overview</button>
        <button>Target</button>
      </div>
    );
  }
}
