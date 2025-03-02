import React from 'react'

function StateList(props) {
  return (
    <li className={props.name}>{props.name}</li>
  )
}

export default StateList