import React, { Component } from 'react'
import axios from 'axios'

class PassagesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passages: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/passages.json')
    .then(response => {
      this.setState({passages: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.passages.map((passage) => {
          return (
            <div className="passage" key={passage.id} >
              <h4>{passage.departure_port}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default PassagesContainer
