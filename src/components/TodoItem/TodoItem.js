import React from "react"

export default TodoItem = (props) => {
  <li className="list-group-item">
    <input type="checkbox" name={props.id} key={props.id} onChange={props.toggleComplete} />
    <label htmlFor={props.id}>{props.text}</label>
  </li>
}
