import React from "react";

export default props => (
  <li className="list-group-item" onClick={props.toggleComplete}>
    {/* <input type="checkbox" name={item.id} key={item.id} />
    <label htmlFor={item.id}>{item.text}</label> */}
    <div style={{
      textDecoration: props.item.complete ? 'line-through' : ''
    }}>{props.item.text}</div>
  </li>
)