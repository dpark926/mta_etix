import React, {Component} from 'react'
import '../styles/TimeDate.css';

class TimeContainer extends Component {
  constructor() {
    super()

    this.state = {
      day: (new Date()).getDay(),
      month: (new Date()).getMonth(),
      date: (new Date()).getDate(),
      year: (new Date()).getFullYear(),
      hour: (new Date()).getHours(),
      minute: (new Date()).getMinutes(),
      second: (new Date()).toLocaleTimeString()
    }

    this.countingSecond = this.countingSecond.bind(this)
  }

  countingSecond() {
    this.setState({
      day: (new Date()).getDay(),
      month: (new Date()).getMonth(),
      date: (new Date()).getDate(),
      year: (new Date()).getFullYear(),
      hour: (new Date()).getHours(),
      minute: (new Date()).getMinutes(),
      second: (new Date()).toLocaleTimeString(),
    })
  }

  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }

  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
      <div className='timeclock-main'>
        {/* <h1>TimeContainer</h1> */}
        <h3 className='timeclock-text'>{days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.second}</h3>
      </div>
    )
  }
}

export default TimeContainer
