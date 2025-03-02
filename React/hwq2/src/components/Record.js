import React from 'react'
function Record(props) {
  return (
    <tr className={props.str}>
        <td>{props.sno}</td>
        <td>{props.str}</td>
        <td>{props.subject}</td>
    </tr>
  )
}

export default Record;