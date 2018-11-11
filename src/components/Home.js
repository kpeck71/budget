import React from 'react'
import Header from './Header'
import Content from './Content'
import TimeForm from '../TimeForm'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      currentTime: null, tz: 'PST', msg: 'now'
    }
  }
  fetchCurrentTime() {
    fetch(this.getApiUrl())
      .then(resp => resp.json())
      .then(resp => {
        const currentTime = resp.dateString;
        this.setState({currentTime})
      })

  }

  getApiUrl() {
    const {tz, msg} = this.state;
    const host = 'https://andthetimeis.com';
    return host + '/' + tz + '/' + msg + '.json'
  }

  handleFormSubmit(e) {
    this.fetchCurrentTime();
  }

  handleChange(newState) {
    this.setState(newState)
  }

render()  {
  const {currentTime, tz} = this.state;
  const apiUrl = this.getApiUrl();

  return (
    <div>
      <Header />
      <Content />

      {!currentTime &&
      <button onClick={this.fetchCurrentTime}> Get Current time</button>}
      {currentTime && <div>The current time is: {currentTime}</div>}
      <TimeForm
        onFormSubmit={this.handleFormSubmit}
        onFormChange={this.handleChange}
        tz={tz}
        msg={'now'}
        />
      <p>We'll be making a request from: <code>{apiUrl}</code></p>
      <Link to='/about'>Go to about</Link>
    </div>


    )
  }
}

export default Home;
