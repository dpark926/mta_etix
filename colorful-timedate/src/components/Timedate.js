import React from 'react'

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var d = new Date();
var day = d.getDay()
var month = d.getMonth()
var date = d.getDate()
var year = d.getFullYear()
var hour = d.getHours()
var minute = d.getMinutes()
var second = d.getSeconds()

function Timedate() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Day: {days[day]}</p>
      <p>Month: {months[month]}</p>
      <p>Date: {date}</p>
      <p>Year: {year}</p>
      <p>Hour: {hour}</p>
      <p>Minute: {minute}</p>
      <p>Second: {second}</p>
    </div>
  )
}

export default Timedate
