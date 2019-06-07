import React from 'react'
import { selector } from './quizStyles'

function Notes(props) {

return (
  <div style={selector}>
    <select onChange={props.onChange}>
      <option value='a/4'>a</option>
      <option value='b/4'>b</option>
      <option value='c/4'>c</option>
      <option value='d/4'>d</option>
      <option value='e/4'>e</option>
      <option value='f/4'>f</option>
    </select>
  </div>
)

} //eventually other options can go in here

export default Notes
