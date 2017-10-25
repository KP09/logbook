import React from 'react';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleMenu();
  }

  render() {
    return(
      <div style={divStyle} >
        <h1>All Passages</h1>
        <button onClick={this.handleClick}>
          <img src="#" alt="menu" />
        </button>
      </div>
    )
  }
}

const divStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}
