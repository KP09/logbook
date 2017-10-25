import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <button className="call-to-action" onClick={this.handleClick}>
        New Passage
      </button>
    )
  }
}
