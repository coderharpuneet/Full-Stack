import React from 'react'

function countryList(props) {
  return (
    <li className={props.name}>{props.name}</li>
  )
}

export default countryList