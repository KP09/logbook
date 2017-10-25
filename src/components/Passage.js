import React from 'react'

export class PassageSummary extends React.Component {
  render() {
    const passage = this.props.passage;
    return (
      <div style={divStyle}>
        <div>
          <h2>{passage.departure_port}</h2>
          <h3>{passage.departure_date}</h3>
        </div>
        <div>
          <h2>{passage.arrival_port}</h2>
          <h3>{passage.arrival_date}</h3>
        </div>
      </div>
    )
  }
}

const divStyle = {
  backgroundColor: "#486cbd",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
  fontFamily: "Helvetica",
  fontSize: "0.8em",
  color: "white"
}
