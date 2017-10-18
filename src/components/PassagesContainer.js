import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'

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

  addNewPassage = () => {
    axios.post(
      'http://localhost:3001/api/v1/passages',
      { passage:
        {
          departure_port: '',
          departure_date: '',
          arrival_port: '',
          arrival_date: '',
          description: '',
          miles: '',
          hours: '',
          night_hours: '',
          role: '',
          overnight: '',
          tidal: '',
          ocean_passage: ''
        }
      }
    )
    .then(response => {
      console.log(response)
      const passages = update(this.state.passages, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({passages: passages})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="passages-container">
        <button className="newPassageButton" onClick={this.addNewPassage}>
          New Passage
        </button>
        <table>
          <thead>
            <tr>
              <th>Departure port</th>
              <th>Departure date</th>
              <th>Arrival port</th>
              <th>Arrival date</th>
              <th>Description</th>
              <th>Miles</th>
              <th>Hours</th>
              <th>Night hours</th>
              <th>Role</th>
              <th>Overnight?</th>
              <th>Tidal?</th>
              <th>Ocean passage?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.passages.map((passage) => {
              return (
                <tr className="passage" key={passage.id} >
                  <td>{passage.departure_port}</td>
                  <td>{passage.departure_date}</td>
                  <td>{passage.arrival_port}</td>
                  <td>{passage.arrival_date}</td>
                  <td>{passage.description}</td>
                  <td>{passage.miles}</td>
                  <td>{passage.hours}</td>
                  <td>{passage.night_hours}</td>
                  <td>{passage.role}</td>
                  <td>{passage.overnight ? "Yes" : "No"}</td>
                  <td>{passage.tidal ? "Yes" : "No"}</td>
                  <td>{passage.ocean_passage ? "Yes" : "No"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PassagesContainer
