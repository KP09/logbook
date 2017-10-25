import React from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import { Button } from '../components/Button';
import { PassageSummary } from '../components/Passage';

export class PassagesContainer extends React.Component {
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
        <Button onClick={this.addNewPassage} />
        {this.state.passages.map((passage) => {
          return <PassageSummary passage={passage} key={passage.id} />
        })}
      </div>
    )
  }
}
